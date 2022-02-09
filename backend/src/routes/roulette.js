const express = require('express');
const { Sequelize, sequelize } = require('../models');
const app = express.Router()
const db = require('../models')
const fs = require('fs');
const {verifyToken} = require('../utils/jwt');
// const { DATE } = require('sequelize/dist');
const {enrollMileage}= require('./functions')
const {getMileage}= require('./functions')
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
        const result={"rewards":[],"result":getRandom(rewards)}
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


async function rewardUpdate(rewardId){
    // const transaction = await db.sequelize.transaction()
    try {
        if(await db['reward'].findOne({where:{id:rewardId}})<1) return;
        const mileage = await db['reward'].increment({remain:-1},{where:{id:rewardId}})
        // console.log("reward updated!!")
    } catch (error) {
        console.log(error);
        return;
        // return 
    }
}

//인증된 회원이 리워드를 받음 (enroll reward results)
app.post('/',async(req,res)=>{    
    const transaction = await db.sequelize.transaction()
    //get amount of mileage
    let amount
    try {
        record = await db['reward'].findOne({
            where:{id:req.body.rewardId},
            attributes:['reward']
        })
        amount = record.reward
    } catch (error) {
        console.log(error)
        console.log("eroor on select at reward table")
        return {msg:"error on select at reward table"}
    }
    try {
        let mileageId = null
        let {memberId,rewardId,phone,surveyId} = req.body;
        let remain = await getMileage(memberId);

        if(! req.body.phone) mileageId = await enrollMileage(memberId,amount,remain,0)//stateId==0 := 적립
        
        const q = await db['roulette_result'].create({
            fk_members:memberId,
            fk_surveys:surveyId,
            fk_rewards:rewardId,
            phone:phone,
            fk_mileages:mileageId
        },{transaction:transaction})
        transaction.commit()
        rewardUpdate(rewardId)
        res.json({msg:"success"})
        
    } catch (error) {
        console.log("error on roulette 103")
        console.log(error);
        return res.status(400).json({msg:"error"})
    }
})

module.exports = app