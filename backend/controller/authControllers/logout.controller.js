
export const logoutController = (req,res)=>{
    // delete cookie from cookie storage
    res.clearCookie("token",{       // should contain same as login token cookie
        httpOnly: true,
        secure: false,  
        sameSite: "lax"
    })
    // send res
    res.status(200).json({message:"Logout successful"})
}