import { ArticleModel } from "../../models/ArticleModel.js";


export const deleteArticleController = async(req,res)=>{
        const authorIdOfToken = req.user?.id
        // get modified article from client
        const {articleId,title,category,content,isArticleActive} = req.body
        // get article by id
        const articleOfDb = await ArticleModel.findOne({_id:articleId,author:authorIdOfToken})
        // check status
        if(isArticleActive === articleOfDb.isArticleActive)
        {
            return res.status(200).json({message:"Already in same stage"})
        }
        // update article
        articleOfDb.isArticleActive = isArticleActive
        await articleOfDb.save()

        return res.status(200).json({message:"Article stage changed"})

}
