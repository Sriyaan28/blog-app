import exp from 'express'
import { verifyToken } from '../middleware/verifyToken.js'
import { readArticles } from '../controller/userAPIControllers/readArticles.controller.js'
import { commentArticle } from '../controller/userAPIControllers/commentArticle.controller.js'
import { getArticleByIdController } from '../controller/userAPIControllers/getArticleById.controller.js'

export const userApp = exp.Router()

// Read articles of all authors
userApp.get('/article',verifyToken("USER"),readArticles)

// Get single article by ID
userApp.get('/article/:articleId', verifyToken("USER", "AUTHOR", "ADMIN"), getArticleByIdController)

// Add comments to an article
userApp.put('/article',verifyToken("USER"),commentArticle)