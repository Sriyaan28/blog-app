import exp from 'express'
import { registerController } from '../controller/authControllers/register.controller.js'
import { loginController } from '../controller/authControllers/login.controller.js'
import { logoutController } from '../controller/authControllers/logout.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'
import { passwordController } from '../controller/authControllers/password.controller.js'

export const authApp = exp.Router()

// route for register
authApp.post('/register',registerController)

// route for login
authApp.post('/login',loginController)

// route for logout
authApp.get('/logout',logoutController)

// route for changing pass
authApp.put('/password',verifyToken("USER","AUTHOR","ADMIN"),passwordController)