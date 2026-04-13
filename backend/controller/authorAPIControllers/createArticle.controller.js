import {UserModel} from '../../models/UserModel.js'
import { ArticleModel } from "../../models/ArticleModel.js"

export const createArticleController = async(req,res)=>{
    // get body
    const articleObj = req.body
    // get user from decoded token
    console.log(req.user)
    let user = req.user
    // check user presence
    const author = await UserModel.findById(articleObj.author)
    if(!author)
    {
        return res.status(404).json({message:"Author not Found"})
    }
    // cross check email
    if(author.email != user.email)
    {
        return res.status(403).json({message:"Unauthorised author"})
    }
    //  check if user is author (middleware is absent for now)
    // if(!(author.role === "AUTHOR"))
    // {
    //     return res.status(403).json({message:"Only AUTHORS are allowed to publish"})
    // } (or) use verifyToken middleware 

    // if author is valid, create an article
    const article = new ArticleModel(articleObj)

    // save
    article.save()
    // send response
    return res.status(201).json({message:"Article Published"})
}