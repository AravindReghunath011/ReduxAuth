import express from 'express'
import { adminAuth } from '../middleware/adminAuthMiddleware.js';


const router  = express.Router()
import { 
    authAdmin,
    getUsers,
    editUser
 } from '../controllers/adminController.js';



router.post('/login',authAdmin)
router.get('/getusers',adminAuth,getUsers)
router.put('/edituser',adminAuth,editUser)


export default router