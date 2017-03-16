var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var port = 8086;
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');
var corsOptions = {
    origin: 'http://localhost:8086'
};

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(cors());
app.use(session({secret: config.sessionSecret, cookie: {secure: false}}));

app.get('/api/profiles', profileCtrl.getFriendsProfiles);
app.post('/api/login', userCtrl.login);






app.listen(port, function(){
  console.log("Listeing on port ", port, "Is this thing working");
});
