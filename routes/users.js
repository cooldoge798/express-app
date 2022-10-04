var express = require('express');
var router = express.Router();
var validator = require("email-validator");
validator.validate("test@email.com");
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(config.userList);
});

router.get('/search', function(req, res, next) {
  const users = config.userList;
  const queryEmail = req.query.email;
  if (!validator.validate(queryEmail)) {
    return res.json({err: true, msg: "Invalid email supplied"});
  }
  for (let key in users) {
    const user = users[key];
    if (user.email == queryEmail) {
      res.json(user);
    }
  }
  res.json({err: true, msg: `User with email id: ${queryEmail} not found`});
});

module.exports = router;
