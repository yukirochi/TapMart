const express = require("express");
const signup = require("./controller/signup")

const router = express.Router();

router.post("/auth/signup",signup)

module.exports = router