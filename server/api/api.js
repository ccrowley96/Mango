const express = require("express");
const router = express.Router();
const passport = require("passport");

// Require users API
const users = require("./users.js");

router.get("/", (req, res, next) => {
	res.send("Welcome to the Mango API : )");
});

// Routes [unprotected route] login & register
router.use("/users", users);

// An api endpoint that returns a short list of items [protected route]
router.get('/getList', passport.authenticate("jwt", { session: false }), (req,res) => {
    var list = ["item1", "item2", "item3"];

    setTimeout(() => {res.json(list);}, 2000);
});

module.exports = router