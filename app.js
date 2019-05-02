const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',require('./api/routes'));
app.listen('1234',()=>{
    console.log('Server start');
})