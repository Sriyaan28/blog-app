import { UserModel } from "../../models/UserModel.js"

export const readEmailController = async (req,res) => {
    try{
        // find email of users and authors based on roles and active status
        const users = await UserModel.find({role: {$in: ["USER","AUTHOR"]}, isUserActive: true}).select("-password")
        const emailOfUsers = users.map(user => user.email)
        res.status(200).json(emailOfUsers)
        // todo later: can also add role of user
    }
    catch(err)
    {
        res.status(500).json({message: "Internal Server Error"})
    }
}