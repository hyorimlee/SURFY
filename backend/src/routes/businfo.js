const express = require('express');
const app = express.Router()
const ctrl = require('../controller/ctrl')

app.get('/:stationId',ctrl.output.businfo)

module.exports = app