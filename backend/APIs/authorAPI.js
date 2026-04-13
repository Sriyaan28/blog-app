import exp from 'express'
import { createArticleController } from '../controller/authorAPIControllers/createArticle.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'
import { readArticleController } from '../controller/authorAPIControllers/readArticle.controller.js'
import { editArticleController } from '../controller/authorAPIControllers/editArticle.controller.js'
import { deleteArticleController } from '../controller/authorAPIControllers/delArticleController.js'

export const authorApp = exp.Router()

// Create an article
authorApp.post('/article',verifyToken("AUTHOR"),createArticleController)

// Read own articles
authorApp.get('/article',verifyToken("AUTHOR"),readArticleController)

// Edit an article
authorApp.put('/article',verifyToken("AUTHOR"),editArticleController)

// Delete/Restore an article
authorApp.patch('/article',verifyToken("AUTHOR"),deleteArticleController)