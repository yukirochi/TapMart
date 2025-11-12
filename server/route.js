const express = require("express");
const signup = require("./controller/signup")
const Login = require("./controller/Login")
const addtocart = require("./controller/cart")
const viewcart = require("./controller/viewcart")
const router = express.Router();

router.post("/auth/signup",signup)
router.post ("/auth/login",Login)
router.post("/cart/addtocart",addtocart)
router.post("/cart/viewcart", viewcart)

module.exports = router