const api = require("./api/api.js");
const bodyParser = require('body-parser');
var cors = require("cors");
var cookieParser = require("cookie-parser");
const express = require('express')
const path = require('path');
const { mongoose } = require("./db/mongoose.js");

let port = process.env.PORT || 8888;

const app = express();


//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"))
	.use(cors())
	.use(cookieParser());

app.use("/api", api);

if (process.env.NODE_ENV === 'PROD') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, '/../client/build')));
	console.log('PATH: ', path.join(__dirname, '/../client/build'))
	// Handle React routing, return all requests to React app
	app.get('*', function(req, res) {
	  res.sendFile(path.join(__dirname, './../frontend/build', 'index.html'));
	});
}

app.listen(port, function () {
    console.log('You got Mango\'d!')
})