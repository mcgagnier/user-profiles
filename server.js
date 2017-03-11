var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var port = 8086;

var corsOptions = {
    origin: 'http://localhost:8086'
};


app.use(bodyParser.json());
app.use(cors());
