const {
    getToken
} = require('token-reader-service');

const getShortUrl = (req, res, next) => {
    try {
        const hostName = req.headers.host;
        const shortUrl = hostName + '/' + getToken();
    }catch(error) {
        next(error);
    }
}

module.exports = {
    getShortUrl
}