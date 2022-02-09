const express = require('express');
const surveyRouter = require('./survey')
const businfoRouter = require('./businfo');
const weatherRouter = require('./weather');
<<<<<<< HEAD
const mapdataRouter = require('./mapdata');
=======
const rouletteRouter = require('./roulette');
const memberRouter = require('./member');
const mileageRouter = require('./mileage')
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562

const router = express.Router();

router.use('/api/survey',surveyRouter)
router.use("/api/businfo", businfoRouter);
router.use("/api/weather", weatherRouter);
<<<<<<< HEAD
// router.use("/data", mapdataRouter);

=======
router.use("/api/roulette",rouletteRouter);
router.use("/api/member",memberRouter)
router.use("/api/mileage",mileageRouter)
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
module.exports = router;