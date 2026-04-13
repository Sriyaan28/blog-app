import jwt from "jsonwebtoken"
const {verify} = jwt
import { config } from "dotenv";
config()

export const verifyToken = (...allowedRoles)=>{
    return (req,res,next)=>{
    try
    {
        // get token from cookie
        const token = req.cookies?.token;       // cookie parser module should be present
        // if token not exists
        if(!token)
        {
            return res.status(401).json({message:"Please login"})
        }
        // validate token(decode the token) - jwt
        let decodedToken = verify(token,process.env.SECRET_KEY)
        // check the role is same as the role in decodedToken
        if(!allowedRoles.includes(decodedToken.role))
        {
            return res.status(403).json({message:"Invalid Role"})
        }
        // add decoded token to request
        req.user = decodedToken
        next()
    }
    catch(err)
    {
        return res.status(401).json({message:"Invalid token"})
    }
}
}