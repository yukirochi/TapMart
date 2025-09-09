const model = require("../model/usermodel");

let Login = async(req, res) =>{
    let {email, password} = req.body;
    
    let verify_info = await model.findOne({email:email, password:password})
    
    if(verify_info){
         res.json({
            msg:"login successfully"
         })
    }else{
        res.json({
            msg:"invalid credentials"
         })
    }
}

module.exports = Login