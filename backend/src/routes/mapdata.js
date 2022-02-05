const express = require('express');
const app = express.Router()
const ctrl = require('../controller/ctrl')

app.get('/',ctrl.output.mapdata)

module.exports = app