const express = require('express');
const { Sequelize, sequelize } = require('../models');
const app = express.Router()
const db = require('../models')
const fs = require('fs');
const {verifyToken} = require('../utils/jwt');
// const { DATE } = require('sequelize/dist');

function getRandom(rewards){
    let arr = []
    for(i of rewards){
        if(i['remain']==0) continue;
        var arri = Array.apply(null,new Array(i['probability'])).map(Number.prototype.valueOf,i['id']);
        arr= arr.concat(arri)        
    }
    const idx = Math.floor(Math.random()*100)
    return arr[idx]
}

// 룰렛 결과, 리워드 정보
app.get('/:surveyId',async(req,res)=>{
    try{
        const {surveyId} = req.params
        const rewards = await db['reward'].findAll({
            where:{
                fk_surveys : surveyId,
            },
            attributes :[
                'id',
                'probability',
                'reward',
                'remain',
                'need_phone',
            ]
        })
        const result={"rewards":[],"result":await getRandom(rewards)}
        rewards.forEach((i)=>{
            result['rewards'].push({
                'id':i['id'],
                'probability':i['probability'],
                'rewared':i['reward'],
                'need_phone':i['need_phone']
            })
        })
        
        return res.json(result)
    }
    catch(err){
        console.log(err);
        return res.status(400).json({msg:"error"})
    }
})

async function mileageEnroll(memberId,rewardId,stateId){
    console.log("here")
    let amount
    try {
        amount = await db['reward'].findOne({
            where:{id:rewardId},
            attributes:['reward']
        })
    } catch (error) {
        console.log(error)
        return {msg:"error on select at reward table"}
    }
    const transaction = await db.sequelize.transaction()
        try {
            let timestamp = new Date();
            const mileage = await db['mileage'].create({
                amount :Number(amount['reward']),
                fk_members:memberId,
                fk_states:stateId,
                timestamp: timestamp,
            },{transaction:transaction})

            transaction.commit()
            console.log({msg:"success insert to mileage table"})
            return mileage.id

        } catch (error) {
            console.log(error)
            await transaction.rollback();
            // return {msg:"error on mileage insert"}
        }
}
async function rewardUpdate(rewardId,nxt){
    
}

//인증된 회원이 리워드를 받음 (enroll reward results)
app.post('/',async(req,res)=>{    
    const transaction = await db.sequelize.transaction()
    try {
        let mileageId=null
        if(! req.body.phone) mileageId = await mileageEnroll(req.body.memberId,req.body.rewardId,0)//stateId==0 := 적립
        let {memberId,rewardId,phone,surveyId} = req.body;
        const q = await db['roulette_result'].create({
            fk_members:memberId,
            fk_surveys:surveyId,
            fk_rewards:rewardId,
            phone:phone,
            fk_mileage:mileageId
        },{transaction:transaction})
        transaction.commit()
        rewardUpdate(rewardId)
        res.json({msg:"success"})
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg:"error"})
    }
})

module.exports = app