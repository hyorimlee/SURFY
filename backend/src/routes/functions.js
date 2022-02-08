const express = require('express');
const { Sequelize, sequelize } = require('../models');
const db = require('../models')

const func = {}
func.enrollMileage = async function (memberId,amount,mileage,stateId){
    const transaction = await db.sequelize.transaction()
    console.log("here")
    try {
        mileage=Number(mileage)+Number(amount)
        const record = await db['mileage'].create({
            amount :Number(amount),
            fk_members:memberId,
            fk_states:stateId,
            mileage:mileage,
            timestamp: new Date(),
        },{transaction:transaction})

        transaction.commit()
        return record.id

    } catch (error) {
        console.log({msg:"error on mileage insert",error:error})
        await transaction.rollback();
        return {msg:"error on mileage insert"}
    }
}
func.getMileage = async function (memberId){
    const result = await db['mileage'].findOne({
        where:{fk_members:memberId},
        order:[['timestamp','DESC']]
    })

    if(!result) return 0;
    return result.mileage
}
module.exports = func