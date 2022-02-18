const express = require('express');
const app = express.Router()

const { Sequelize, sequelize } = require('../models');
const db = require('../models')

app.get('/',async(req,res)=>{
    try {
        const result = await db['mapdata'].findAll({
            attributes :[
                'id',
                'name',
                'x',
                'y',
                'operating_time'
            ]
        })
        return res.send(result)
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg:"error"})
    }
})
module.exports = app