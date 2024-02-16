import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to database!")
}).catch((err)=>{
    console.log(err)  
})

const app = express();


app.listen(4000,()=>{
    console.log("server is running on port 4000")
})

app.use("/api/user",userRouter)