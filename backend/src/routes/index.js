const express = require('express');
const surveyRouter = require('./survey')
const businfoRouter = require('./businfo');
const weatherRouter = require('./weather');
const rouletteRouter = require('./roulette');
const memberRouter = require('./member');
const mileageRouter = require('./mileage')
const mapdataRouter = require('./mapdata')

const router = express.Router();

router.use('/api/survey',surveyRouter)
router.use("/api/businfo", businfoRouter);
router.use("/api/weather", weatherRouter);
router.use("/api/roulette",rouletteRouter);
router.use("/api/member",memberRouter)
router.use("/api/mileage",mileageRouter)
router.use("/data",mapdataRouter)
module.exports = router;