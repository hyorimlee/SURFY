const express = require('express');
const { Sequelize, sequelize } = require('../models');
const app = express.Router()
const db = require('../models')
const fs = require('fs');
const {verifyToken} = require('../utils/jwt');
// const { DATE } = require('sequelize/dist');


//get pk by member's id
app.get('/code/:memberCode',async(req,res)=>{
    try {
        const {memberCode} = req.params
        const result = await db['member'].findOne({
            where:{'member_code':memberCode},
        })
        return res.json(result)
    } catch (error) {
        console.log(error)
        return res.status(400,json({mas:error}))
    }
})
//get member information by pk
app.get('/:memberId',async(req,res)=>{
    try {
        const {memberId} = req.params
        const result = await db['member'].findByPk(memberId)
        return res.json(result)
    } catch (error) {
        console.log(error)
        return res.status(400,json({mas:error}))
    }
})
//get all members
app.get('/',async(req,res)=>{
    try {
        const result = await db['member'].findAll({
            attributes :[
                'id',
                'member_code',
                'sns',
            ]
        })
        return res.json(result)
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"error"})
    }
})
//post member
app.post('/',async(req,res)=>{
    const transaction = await db.sequelize.transaction()
    try {
        let {memberCode,sns} = req.body;
        const record = await db['member'].create({
            member_code:memberCode,
            sns:sns
        },{transaction:transaction})
        transaction.commit()
        return res.json({msg:"success",id:record.id})
        
    } catch (error) {
        console.log(error);
        return res.status(400).json(error)
        return res.status(400).json({msg:"error"})
    }
})
//회원 탈퇴
app.put('/withdraw/:memberId',async(req,res)=>{
    try {
        let {memberId} = req.params;
        const record = await db['member'].update({is_withdraw:true},{
            where:{id:memberId}
        })
        
        return res.json({msg:`success to withdraw ${memberId}`})
        
    } catch (error) {
        console.log(error);
        return res.status(400).json(error)
        return res.status(400).json({msg:"error"})
    }
})

// app.put('/:memberId',async(req,res)=>{
//     try {
//         console.log(req.body)
//         let {memberId} = req.params;
//         let {memberCode,sns,password,sex,name,phone} = req.body;
//         const record = await db['member'].update({
//             member_code:memberCode,
//             sns:sns,
//             password:password,
//             sex:sex,
//             name:name,
//             phone:phone,
//         },
//             {where:memberId})

//         return res.json({msg:`success to withdraw ${memberId}`})
        
//     } catch (error) {
//         console.log(error);
//         return res.status(400).json(error)
//         return res.status(400).json({msg:"error"})
//     }
// })
module.exports = app