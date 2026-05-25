import { UserModel } from "../../models/UserModel.js"

export const readEmailController = async (req,res) => {
    try{
        // find users and authors based on roles
        const users = await UserModel.find({role: {$in: ["USER","AUTHOR"]}}).select("-password")
        res.status(200).json({ message: "Users list", payload: users })
    }
    catch(err)
    {
        res.status(500).json({message: "Internal Server Error"})
    }
}