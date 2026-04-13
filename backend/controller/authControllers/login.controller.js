import {UserModel} from '../../models/UserModel.js'
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
const { sign } = jwt
import { config } from "dotenv";
config()

export const loginController = async (req, res) => {
    // get user credentials
    // const userCred = req.body
    const { email, password } = req.body
    // check email's existance
    const user = await UserModel.findOne({ email })
    if (!user) 
    {
        return res.status(400).json({ message: "Invalid user email" })
    }
    // compare password, if user is valid
    const isMatched = await compare(password, user.password)
    if (!isMatched) 
    {
        return res.status(400).json({ message: "Invalid password" })
    }
    // if password valid, then login

    // create token
    const signedToken = sign({id:user._id,email:email,role:user.role},process.env.SECRET_KEY,{expiresIn: "1h"})
    // cookie header
    res.cookie("token",signedToken,{
        httpOnly: true,
        secure: false,  // true for production server
        sameSite: "lax"
    })

    // remove password from user
    const userObj = user.toObject()         // user has a Document, not a JavaScript object
    // delete works only on javascript objects
    delete userObj.password

    // send res
    return res.status(200).json({message:"Login success",payload:userObj})

}