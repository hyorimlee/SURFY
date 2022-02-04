const express = require('express');
const { Sequelize, sequelize } = require('../models');
const app = express.Router()
const db = require('../models')
const fs = require('fs');
const {verifyToken} = require('../utils/jwt');

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
//인증된 회원이 리워드를 받음
app.post('/:surveyId',async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg:"error"})
    }
})

module.exports = app