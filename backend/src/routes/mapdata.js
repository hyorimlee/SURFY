const express = require('express');
const app = express.Router()

const fs = require('fs');
const {development} = require('../config/config.json')
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: development.host,
    user: development.username,
    password : development.password,
    port : 3306,
    database: development.database
})
connection.connect();

app.get('/', async(req, res)=>{
  connection.query(
    "SELECT * FROM maptest", (err, data) =>{
        if(!err){
            res.send(data);
        } else {
            console.log(err);
            res.send(err);
        }
  });
})

module.exports = app