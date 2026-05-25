import { hash } from "bcrypt"
import { UserModel } from '../../models/UserModel.js'
import { uploadToCloudinary } from '../../config/cloudinaryUpload.js'

// register controller
export const registerController = async (req, res) => {
    try {
        // get user data from req body
        const newUser = req.body
        
        // upload image if exists
        if (req.file) {
            const result = await uploadToCloudinary(req.file.buffer);
            newUser.profileImageUrl = result.secure_url;
        }
        // allowed roles for registration - (USER / AUTHOR)
        let allowedRoles = ["USER", "AUTHOR"]
        if (!allowedRoles.includes(newUser.role))    // doesn't accept ADMIN role for registration
        {
            return res.status(400).json({ message: "Invalid role" })
        }
        // hash password
        newUser.password = await hash(newUser.password, 12)
        // create new user
        const newUserDoc = new UserModel(newUser)
        // save user
        await newUserDoc.save()

        return res.status(201).json({ message: "User Registration successful" })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "User Registration failed", error: err })
    }
}