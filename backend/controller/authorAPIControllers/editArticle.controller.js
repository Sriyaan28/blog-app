import { ArticleModel } from "../../models/ArticleModel.js";


export const editArticleController = async(req,res)=>{
    try {
        const authorIdOfToken = req.user?.id
        // get modified article from client
        const {articleId,title,category,content} = req.body

        const modifiedArticle = await ArticleModel.findOneAndUpdate(
            {_id:articleId,author:authorIdOfToken},
            {$set:{title,category,content}},
            {new:true}
        )
        if(!modifiedArticle)
        {
            return res.status(403).json({message:"Unauthorised"})
        }
        return res.status(200).json({message:"Edited article"})
    }
    catch(err) {
        return res.status(500).json({message:"Error updating article", error: err.message})
    }
}



