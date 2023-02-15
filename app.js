const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const uuid = require('uuid');
const {
    ENVIRONMENT
} = require('utils');

if (ENVIRONMENT.DEVELOPMENT === true) {
    dotenv.config({
        path: './dev.env'
    });
} else if (ENVIRONMENT.PRODUCTION === true) {
    dotenv.config({
        path: './prod.env'
    })
}


function assignId(req, res, next) {
    req.id = uuid.v4();
    next();
}

app.use(assignId);

morgan.token('id', (req, res, next) => {
    return req.id;
});

app.use(morgan('Req_Id:: :id Method:: :method Route:: :url Status:: :status'));

app.use(cors({
    origin: '*'
}));


module.exports = app;