const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).jsonp({"message" : "Welcome to the Books Mongo"});
}); 

module.exports = router;