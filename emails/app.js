const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', routes);

module.exports = app;