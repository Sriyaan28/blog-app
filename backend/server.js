import express from 'express';
import cookieParser from 'cookie-parser';

import { config } from 'dotenv';
config()

import { connect } from 'mongoose';

import { userApp } from './APIs/userAPI.js';
import { authorApp } from './APIs/authorAPI.js';
import { adminApp } from './APIs/adminAPI.js';
import { authApp } from './APIs/authAPI.js';

import cors from 'cors'

const app = express();

const PORT = process.env.PORT || 4000

//============= middleware =======================
app.use(express.json())
app.use(cookieParser())

// to allow frontend application to send requests to backend
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174', 'https://blog-app-theta-ruby.vercel.app'],
    credentials: true,
};
app.use(cors(corsOptions));
app.options(/(.*)/, cors(corsOptions));

app.use('/auth',authApp)
app.use('/user-api',userApp)
app.use('/author-api',authorApp)
app.use('/admin-api',adminApp)
//================================================

//========= Connect to database & server =========
const connectDB = async()=>{
    try
    {
        await connect(process.env.DB_URL)
        console.log("DB connected")
        
        if(process.env.STATE !== "DEPLOYED")
        {
            app.listen(PORT,()=>console.log(`Server listening on ${PORT}`))
        }
    }
    catch(err)
    {
        console.log("Error connecting in DB")
    }
    
}
connectDB()

// to handle invalid path
app.use((req,res,next)=>{
    console.log(req.url, " is invalid")
    return res.status(404).json({message:`path ${req.url} is invalid`})
})

// error handling middleware   ----> at the end of the file
// NOTE: error => {name,message,callstack}
app.use((err,req,res,next)=>{
    console.log(err.name)
    //Validation error
    if(err.name === 'ValidationError')
    {
        return res.status(400).json({message:"error occurred",error:err.name})
    }
    //CastError
    if(err.name === 'CastError')
    {
        return res.status(400).json({message:"error occurred",error:err.name})
    }

    //Server side error
    res.status(500).json({message:"Error occurred in server",error:err})
})

export default app;