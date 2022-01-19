const express = require('express');
const app = express.Router()
const ctrl = require('../controller/ctrl')

app.get('/:latitude/:longitude',ctrl.output.weather)

module.exports = app