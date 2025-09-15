const bcrypt = require("bcrypt");
const model = require("../model/usermodel");

let Login = async (req, res) => {
  let { email, password } = req.body;

  let verify_info = await model.findOne({ email: email });

  if (!verify_info) return res.json({ msg: "Invalid Credentials" });

  let matchPassword = await bcrypt.compare(password, verify_info.password);

  if (!matchPassword) return res.json({ msg: "Invalid Credentials" });

  res.json({
    msg: "login successfuly",
  });
};

module.exports = Login;
