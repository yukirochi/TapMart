const model = require("../model/usermodel")

let signup = async(req,res) => {
    let {username, email, password} = req.body

    let verify_email = await model.findOne({email:email});
    let verify_username = await model.findOne({username:username})

    if(verify_email){
        res.json({
           msg:"email taken"
        })
    }

    if(verify_username){
        res.json({
           msg:"username taken"
        })
    }

    if(!verify_email && !verify_username){
        await model.create({
            username: username,
            email : email,
            password: password
        })

        res.json({
            msg: "user created"
        })
    }
}

module.exports = signup