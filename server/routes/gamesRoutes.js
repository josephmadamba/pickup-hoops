
const express = require("express");
const router = express.Router();


const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = router;


