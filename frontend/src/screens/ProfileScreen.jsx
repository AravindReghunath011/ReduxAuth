import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { setCredentials } from '../slices/authSlice';
import {toast} from 'react-toastify'
import { useUserUpdateMutation } from '../slices/usersApiSlice';
import axios from 'axios'





const ProfileScreen = () => {
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [newPassword , setNewPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')
  const [file , setFile] = useState('')
  const [userUpdate,isLoading] = useUserUpdateMutation()
  




  const {userInfo} = useSelector((state)=>state.auth)

  const dispatch = useDispatch()
  
  

  useEffect(()=>{
    setName(userInfo.name)
    setEmail(userInfo.email)
  },[userInfo.name,userInfo.email])

  const submitHandler = async (e)=>{
    e.preventDefault();
    console.log(file,'file')

   
    // axios.put('http://localhost:3000/api/users/profile',formdata)
    // .then(res=>console.log(res))
    // .catch(err=>console.log(err))
    if(newPassword!==confirmPassword){
      console.log('entered')
     toast.error('password do not match ')
    }else{
      const formdata = new FormData()
      formdata.append('file',file)
      formdata.append('name',name)
      formdata.append('_id',userInfo._id)
      formdata.append('email',email)
      formdata.append('newPassword',newPassword)
      try {
        const res = await userUpdate(formdata).unwrap()
        console.log(res,'after update');
        dispatch(setCredentials({...res}))
        toast.success('User Updated')
    } catch (err) {
        toast.error('User already exist')
        console.log(err?.data?.message || err.error);
    }

    }
    
}
  return (
    <div className='flex justify-center items-center h-[89.5vh] bg-zinc-700'>
      <form onSubmit={submitHandler}>
        <div className='h-[65vh] w-[35vw] rounded-lg bg-zinc-800 '>
            <div className='ml-36 pt-3'>
            <h1 className='font-bold text-3xl pb-12  text-white mt-5 '>Profile </h1>
            <input onChange={(e)=>setName(e.target.value)} value={name} className='h-9 w-72 rounded pl-3  border-gray-300 shadow-md' type="text" placeholder='Enter your name' /> <br />
            <h1 className='text-lg mb-2 text-white'>Name</h1>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='h-9 w-72 border-2 border-gray-300 shadow-md rounded pl-3 '   type="text" placeholder='Enter your email address' />
            <h1 className='text-lg mb-2 text-white'>Email Address</h1>
            <input onChange={(e)=>setNewPassword(e.target.value)} className='h-9 w-72 border-2 border-gray-300 shadow-md rounded pl-3 '   type="password" placeholder='Enter your new password' />
            <h1 className='text-lg mb-2 text-white'>New Password</h1>
            <input onChange={(e)=>setConfirmPassword(e.target.value)} className='h-9 w-72 border-2 border-gray-300 shadow-md rounded pl-3 '   type="password" placeholder='Confirm password' />
            <h1 className='text-lg mb-2 text-white'>Confirm Password</h1>
            <input type="file" onChange={(e)=>setFile(e.target.files[0])} />

            <button className='self-center bg-blue-600 text-white mt-3  text-lg px-6 py-1 rounded-md'>update</button>
            
            </div>
            
        </div>
          </form>

    </div>
  )
}

export default ProfileScreen