const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	res.send("Welcome to the Mango API : )");
});

// An api endpoint that returns a short list of items
router.get('/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];

    setTimeout(() => {res.json(list);}, 2000);
    
});

module.exports = router