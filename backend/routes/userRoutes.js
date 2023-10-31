import express from 'express'
import multer from 'multer';
import path from 'path';
import { upload } from '../constants/constants.js';



const router  = express.Router()
import { authUser,
    getUserProfile,
    logoutUser,
    registerUser,
    updateUserProfile,
    
 } from '../controllers/usersControllers.js';




import { protect } from '../middleware/authMiddleware.js';

router.post('/',registerUser)
router.post('/auth',authUser)
router.post('/logout',logoutUser)
router.get('/profile',protect,getUserProfile)
router.put('/profile',upload.single('file'),protect,updateUserProfile)


export default router

