const { 
    createLogger, 
    format, 
    transports 
} = require('winston');
const dailyRotateFile = require('winston-daily-rotate-file');

const logConfiguration = {
    transports: [
        new transports.File({ filename: './logs/error.log', level: 'error' }),
    ]
};

const errorLogger = createLogger(logConfiguration);

if (process.env.ENVIRONMENT === 'DEV') {
    errorLogger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));   
}


module.exports = {
    errorLogger
}