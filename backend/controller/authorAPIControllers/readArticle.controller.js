import { ArticleModel } from "../../models/ArticleModel.js";


export const readArticleController = async(req,res)=>{
    // read all articles of the author
    const idOfAuthor = req.user?.id        // getting from decoded token

    let articlesOfAuthor = await ArticleModel.find({author: idOfAuthor})
    console.log(articlesOfAuthor)
    return res.status(200).json({message:"List of Articles",payload:articlesOfAuthor})
}