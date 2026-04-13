import { compare, hash } from "bcrypt"
import { UserModel } from "../../models/UserModel.js"

export const passwordController = async(req,res)=>{
    //  check current password is same as new password
    const userId = req.user.id
    const newPassword = req.body.newPassword
    const user = await UserModel.findById(userId)
    
    const isMatched = await compare(newPassword,user.password)
    if(isMatched)
    {
        return res.status(400).json({message:"New password cannot be same as currrent password"})
    }
    // get current password of user/author/admin
    const currentPassword = req.body.currentPassword
    // check current password of req and user are same or not
    const isCurrentPasswordMatched = await compare(currentPassword,user.password)
    if(!isCurrentPasswordMatched)
    {
        return res.status(401).json({message:"Password invalid"})
    }
    // hash new password
    const newHashedPassword = await hash(newPassword,12)
    // replace current password with new hashedPassword
    const modifiedUser = await UserModel.findByIdAndUpdate(userId,{$set:{password:newHashedPassword}},{new:true})
    if(!modifiedUser)
    {
        return res.status(500).json({message:"Error updating password"})
    }
    return res.status(200).json({message:"Password updated successfully"})

}