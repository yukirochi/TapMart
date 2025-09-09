const express = require("express");
const signup = require("./controller/signup")
const Login = require("./controller/Login")

const router = express.Router();

router.post("/auth/signup",signup)
router.post ("/auth/login",Login)

module.exports = router