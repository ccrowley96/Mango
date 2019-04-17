// Require Dependencies
const api = require("./api/api.js");
const bodyParser = require('body-parser');
require('dotenv').config()
const express = require('express')
const mongoose  = require('mongoose');
const path = require('path');
const passport = require("passport");
const mangoPassport = require("./config/passport");

let port = process.env.PORT || 8888;

// Create App
const app = express();

// Body Parser Middleware (JSON)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config -- search for user matching JWT payload
mangoPassport(passport);

app.use("/api", api);

if (process.env.NODE_ENV === 'PROD') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, '/../client/build')));

	// Handle React routing, return all requests to React app
	app.get('*', function(req, res) {
	  res.sendFile(path.join(__dirname, '/../client/build', 'index.html'));
	});
}

app.listen(port, function () {
    console.log('You got Mango\'d!')
})