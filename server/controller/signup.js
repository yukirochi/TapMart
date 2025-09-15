const bcrypt = require("bcrypt")
const model = require("../model/usermodel")
const SALT_ROUNDS = 12;

let signup = async(req,res) => {
    let {username, email, password} = req.body
    let verify_email = await model.findOne({email:email});
    let verify_username = await model.findOne({username:username})
    let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

    if(verify_email){
        res.json({
           msg:"email taken",
           status: false
        })
    }

    if(verify_username){
        res.json({
           msg:"username taken",
          status: false
        })
    }

    if(!verify_email && !verify_username){ 
        await model.create({
            username: username,
            email : email,
            password: hashedPassword
        })

        res.json({
            msg: "user created",
            status: true
        })
    }
}

module.exports = signup