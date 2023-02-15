const {
    errorLogger
 } = require('utils/logger');
const logError = (err, req, res, next) => {
    if(process.env.ENVIRONMENT === 'DEV'){
        // console.error(err.message)
        console.error('\x1b[31m', err.stack + " " + req.id)
    }
    errorLogger.log('error', new Date(), {message: err.message} );
    errorLogger.log('error', new Date(), {message: err.stack} );
    console.log("\x1b[32m")
    next(err);
}  

const handleClientError = (err, req, res, next) => {
    if (req.xhr) {
        res.status = (err.status)
        return res.json({ error: err.message })
    } else {
        next(err)
    }
}

const handleError = (err, req, res, next) => {
    res.status= (err.status)
    return res.json({ error: err.message })
}

module.exports = {
    logError,
    handleClientError,
    handleError
}