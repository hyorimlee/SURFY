const express = require('express');
const businfoRouter = require('./businfo');
const weatherRouter = require('./weather');

const router = express.Router();

router.use("/api/businfo", businfoRouter);
router.use("/api/weather", weatherRouter);

module.exports = router;