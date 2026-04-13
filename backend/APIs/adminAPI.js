import exp from 'express'
import { verifyToken } from '../middleware/verifyToken.js'
import { readEmailController } from '../controller/adminControllers/readEmailController.js'
import { blockUserController } from '../controller/adminControllers/blockUserController.js'

export const adminApp = exp.Router()

// verifying admin
adminApp.use(verifyToken("ADMIN"))

// READ ALL USERS & AUTHORS(email)
adminApp.get('/users',readEmailController)
// BLOCK/UNBLOCK USER & AUTHOR
adminApp.put('/block-user',blockUserController)