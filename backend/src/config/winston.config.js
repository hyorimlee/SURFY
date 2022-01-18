const winston = require("winston");
const WinstonDaily = require("winston-daily-rotate-file");
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const now = () =>moment().format("YYYY-MM-DD/h:mm:ss A");

const customFormat = winston.format.printf(
    (info) => `${now()} ${info.level}: ${info.message}`
);

const logger = winston.createLogger({
    timestamp : now,
    format : customFormat,
    transports: [
        new winston.transports.Console(),
        new WinstonDaily({
            level : "debug",
            dataPattern: "YYYY-MM-DD",
            dirname: "./logs",
            filename: `template_debug_%DATE%.log`,
            maxSize:null,
            maxFiles: 14,
        }),
        new WinstonDaily({
            level:"error",
            zippedArchive:true, //압축 여부
            datePattern:"YYYY-MM-DD",
            dirname:"./logs",
            filename:`template_error_%DATE%.log`,
            maxSize:null,
            maxFiles:14,
            json:true
        })
    ]
});
const stream  = {
    write: (message) =>{
        logger.info(message);
    },
    error: (message) =>{
        logger.error(message);
    }
};
module.exports = {stream};