const express = require("express")
const mongoose = require("mongoose")
const router = require("./route")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()
let app = express()

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use("/api",router)

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.dbUri)
        console.log("Db connected");
        
    } catch (error) {
        console.error(error.message);
    }
}

connectDb()

app.listen(4000, ()=>{
    console.log("app is running on port 4000");
})
