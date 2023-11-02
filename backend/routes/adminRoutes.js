import express from 'express'


const router  = express.Router()
import { 
    authAdmin,
    getUsers,
    editUser
 } from '../controllers/adminController.js';



router.post('/login',authAdmin)
router.get('/getusers',getUsers)
router.put('/edituser',editUser)


export default router