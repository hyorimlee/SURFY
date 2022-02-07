const express = require('express');
const { Sequelize, sequelize } = require('../models');
const app = express.Router()
const db = require('../models')
const fs = require('fs');
const {verifyToken} = require('../utils/jwt');
const {enrollMileage}= require('./functions')
const {getMileage}= require('./functions')
app.get('/history/:mileageId',async(req,res)=>{
    try {
        let {mileageId} = req.params
        const result = await db['mileage'].findOne({
            where:{id:mileageId}
        })

        return res.json(result)
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
        return res.status(400).json({msg:"error"})
    }
})
app.get('/history',async(req,res)=>{
    try {
        let {memberId,limit} = req.query;
        if(limit == 0) limit = null
        const result = await db['mileage'].findAll({
            where:{fk_members:memberId},
            order:[['timestamp','DESC']],
            limit:Number(limit),
        })
        return res.json(result)
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
        return res.status(400).json({msg:"error"})
    }
})
//마일리지 잔액
app.get('/:memberId',async(req,res)=>{
    try {
        let {memberId} = req.params
        const result = await getMileage(memberId)
        return res.json(result)
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
        return res.status(400).json({msg:"error"})
    }
})
//get all mileage history
app.get('/',async(req,res)=>{
    try {
        const result = await db['mileage'].findAll()
        return res.json(result)
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"error"})
    }
})

app.post('/save',async(req,res)=>{
    try {
        let {amount, memberId} = req.body
        let mileage = Number(await getMileage(memberId));
        const record = await enrollMileage(memberId,amount,mileage,0);
        return res.json({msg:"success",mileage:record.mileage})
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"error"})
    }
})
//post member
// app.post('/',async(req,res)=>{
//     const transaction = await db.sequelize.transaction()
//     try {
//         let {memberCode,sns} = req.body;
//         const record = await db['mileage'].create({
//             member_code:memberCode,
//             sns:sns
//         },{transaction:transaction})
//         transaction.commit()
//         return res.json({msg:"success",id:record.id})
        
//     } catch (error) {
//         console.log(error);
//         return res.status(400).json(error)
//         return res.status(400).json({msg:"error"})
//     }
// })
// //회원 탈퇴
// app.put('/withdraw/:memberId',async(req,res)=>{
//     try {
//         let {memberId} = req.params;
//         const record = await db['member'].update({is_withdraw:true},{
//             where:{id:memberId}
//         })
        
//         return res.json({msg:`success to withdraw ${memberId}`})
        
//     } catch (error) {
//         console.log(error);
//         return res.status(400).json(error)
//         return res.status(400).json({msg:"error"})
//     }
// })


module.exports = app
// module.exports = enrollMileage
// module.exports = getMileage
// module.exports = {app,enrollMileage,getMileage}