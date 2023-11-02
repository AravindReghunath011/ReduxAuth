import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'


// @desc  Auth admin/login
// route  POST /api/admin/auth
// access Public
const authAdmin = asyncHandler(async(req,res)=>{
    console.log(req.body,'auth body');
    const {email,password} = req.body;
    const admin = await User.findOne({email:email,isAdmin:'true'})
    
    console.log(admin,'admin');
    if(admin && await admin.matchPassword(password)){
        generateToken(res,admin._id)

        console.log(admin._id);
        console.log(admin.email);
        console.log(admin.profileImage);
        console.log(admin.name);
        res.status(201).json({
            _id:admin._id,
            name:admin.name,
            email:admin.email,
            profileImage:admin.profileImage

            
        })
    }else{
        console.log('error');
        res.status(400)
        throw new Error('Invalid email or password')
    }
   
    
})


// @desc  getUSers admin/ get users
// route  Get /api/admin/getusers
// access Public
const getUsers = asyncHandler(async(req,res)=>{
    try {
        const users = await User.find({})
    
    console.log(users,'Users');
    
        res.status(201).json({
            users:users

            
        })
    } catch (error) {
        console.log(error.message);
    }   
})

// @desc  editUser admin/ edit User
// route  put /api/admin/edituser
// access private
const editUser = asyncHandler(async(req,res)=>{
    try {
        
        const {name,email} = req.body
        let user = await User.find({email})
        if(user){
           user = await User.updateOne({email},{
                name:name || user.name,
                email:email || user.email
            },{new:true})
        }else{
            console.log('no user');
        }
        
       
        console.log(user,'updateduser');
        res.status(201).json({
            user: user

            
        })
    } catch (error) {
        console.log(error.message);
    }   
})

export {
    authAdmin,
    getUsers,
    editUser
}


