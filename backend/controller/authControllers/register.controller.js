import { hash } from "bcrypt"
import {UserModel} from '../../models/UserModel.js'

// register controller
export const registerController = async (req, res) => {
    try {
        // get user data from req body
        const newUser = req.body
        // allowed roles for registration - (USER / AUTHOR)
        let allowedRoles = ["USER","AUTHOR"]
        if(!allowedRoles.includes(newUser.role))    // doesn't accept ADMIN role for registration
        {
            return res.status(400).json({message:"Invalid role"})
        }
        // hash password
        newUser.password = await hash(newUser.password, 12)
        // create new user
        const newUserDoc = new UserModel(newUser)
        // save user
        await newUserDoc.save()

        return res.status(201).json({ message: "User Registration successful" })
    }
    catch(err)
    {
        return res.status(500).json({message:"User Registration failed",error:err})
    }
}