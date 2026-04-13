import { ArticleModel } from "../../models/ArticleModel.js"

export const commentArticle = async(req,res)=>{
    // get body from req
    const {articleId,comment} = req.body
    // search for presence of article & state of article
    const articleObj = await ArticleModel.findOne({_id:articleId,isArticleActive:true})
    if(!articleObj)
    {
        req.status(404).json({message:"Article not found"})
    }
    // get user id if article is present
    const userId = req.user?.id
    // add comment to comments array of articleDocument
    articleObj.comments.push({user:userId,comment:comment})
    // save
    await articleObj.save()
    // send res
    return res.status(201).json({message:"Comment added"})
}