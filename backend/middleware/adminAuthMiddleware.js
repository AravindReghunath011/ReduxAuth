import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const adminAuth = asyncHandler(async (req,res,next)=>{
    let token ;
    token = req.cookies.jwt;
    if(token){
        console.log('entered in token');
        try {
           const decoded = jwt.verify(token,process.env.JWT_SECRET) 
           const {Id} = decoded
           console.log('decoded' , decoded);
            let admin =  await User.findOne({_id:Id,isAdmin:'true'})
            console.log(admin,'admin');
            if(admin){
                console.log('entered admin');
                next()
            }else{
                
            throw new Error('Not authorized , Not Admin')
            }
        } catch (error) {
            res.status(401)
            throw new Error('Not authorized , invalid token')
        }
    }else{
        res.status(401)
        throw new Error('Not authorized , no token');

    }
})

export { adminAuth } 