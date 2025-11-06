const express = require("express");
const signup = require("./controller/signup")
const Login = require("./controller/Login")
const addtocart = require("./controller/cart")
const router = express.Router();

router.post("/auth/signup",signup)
router.post ("/auth/login",Login)
router.post("/cart/addtocart",addtocart)

module.exports = router