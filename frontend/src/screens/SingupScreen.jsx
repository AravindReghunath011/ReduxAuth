import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import {toast} from 'react-toastify'


const SingupScreen = () => {
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')

  // const [register,isLoading] = useRegisterMutation()


  const navigate  = useNavigate()
  const dispatch = useDispatch()

  const {userInfo} = useSelector((state)=>state.auth)
  if(userInfo){
    navigate('/')
  }

  const submitHandler = async (e)=>{
    e.preventDefault();
    if(password!==confirmPassword){
      toast.error('passwords do not match')
    }else{
      try {
        const res = await register({name,email,password}).unwrap()
        console.log(res);
        dispatch(setCredentials({...res}))
        navigate('/')
    } catch (err) {
        toast.error(err?.data?.message || err.error);
    }

    }
    
}
  return (
    <div className='flex justify-center items-center h-[80vh] bg-zinc-700'>
      <form onSubmit={submitHandler}>
        <div className='h-[65vh] w-[35vw] rounded-lg bg-zinc-800 '>
            <div className='ml-36 pt-3'>
            <h1 className='font-bold text-3xl pb-12  text-white mt-5 '>Register </h1>
            <input onChange={(e)=>setName(e.target.value)} className='h-9 w-72 rounded pl-3  border-gray-300 shadow-md' type="text" placeholder='Enter your name' /> <br />
            <h1 className='text-lg mb-2 text-white'>Name</h1>
            <input onChange={(e)=>setEmail(e.target.value)} className='h-9 w-72 border-2 border-gray-300 shadow-md rounded pl-3 '   type="text" placeholder='Enter your email address' />
            <h1 className='text-lg mb-2 text-white'>Email Address</h1>
            <input onChange={(e)=>setPassword(e.target.value)} className='h-9 w-72 border-2 border-gray-300 shadow-md rounded pl-3 '   type="password" placeholder='Enter your password' />
            <h1 className='text-lg mb-2 text-white'>password</h1>
            <input onChange={(e)=>setConfirmPassword(e.target.value)} className='h-9 w-72 border-2 border-gray-300 shadow-md rounded pl-3 '   type="password" placeholder='Confirm password' />
            <h1 className='text-lg mb-2 text-white'>Confirm password</h1>

            <button className='self-center bg-blue-600 text-white mt-3  text-lg px-6 py-1 rounded-md'>submit</button>
            
            </div>
            
        </div>
          </form>

    </div>
  )
}

export default SingupScreen