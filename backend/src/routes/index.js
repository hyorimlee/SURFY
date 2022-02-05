const express = require('express');
const surveyRouter = require('./survey')
const businfoRouter = require('./businfo');
const weatherRouter = require('./weather');
const mapdataRouter = require('./mapdata');

const router = express.Router();

router.use('/api/survey',surveyRouter)
router.use("/api/businfo", businfoRouter);
router.use("/api/weather", weatherRouter);
// router.use("/data", mapdataRouter);

module.exports = router;