import {ArticleModel} from '../../models/ArticleModel.js'

export const readArticles = async(req,res)=>{
    // read articles
    const articlesList = await ArticleModel.find({isArticleActive:true})
    // send res
    res.status(200).json({message:"Articles List",payload: articlesList})
}