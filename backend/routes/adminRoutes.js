import express from 'express'
import multer from 'multer';
import path from 'path';

const router  = express.Router()
import { authUser,
    getUserProfile,
    logoutUser,
    registerUser,
    updateUserProfile,
    
 } from '../controllers/usersControllers.js';