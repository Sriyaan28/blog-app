import { UserModel } from "../../models/UserModel.js"

export const blockUserController = async (req, res) => {
    try {
        // can block/unblock both user and author
        const { email } = req.body
        if (!email) {
            return res.status(400).json({ message: "email is required" })
        }
        // change isUserActive to false to block and true to unblock
        const user = await UserModel.findOne({ email }).select("-password")
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        user.isUserActive = !user.isUserActive
        await user.save()
        res.status(200).json({ message: user.isUserActive ? 'unblocked user' : 'blocked user',payload: user})
    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}