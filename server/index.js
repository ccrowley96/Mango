const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const api = require("./api/api.js");
const app = express()

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", api);

app.get('/', function (req, res) {    
    res.sendfile('mango/client/index.html', {'root': '../'});
    //res.sendFile(path.join(__dirname+'/client/index.html'), {'root' : '../'});
})

app.listen(3005, function () {
    console.log('You got Mango\'d!')
})