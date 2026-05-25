import { ArticleModel } from '../../models/ArticleModel.js';

export const getArticleByIdController = async (req, res) => {
    try {
        const { articleId } = req.params;
        const article = await ArticleModel.findById(articleId);
        
        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }
        
        res.status(200).json({ message: "Article details", payload: article });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to fetch article", error: err });
    }
};
