import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import {toast} from 'react-toastify';
import { login } from '../../../backend/api/api.js';

const LoginScreen = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('')

    const navigate  = useNavigate()
    const dispatch = useDispatch()

    // const [login,{isLoading}] = useLoginMutation();

    const {userInfo} = useSelector((state)=>state.auth)

    const submitHandler = async (e)=>{
        e.preventDefault();
        try {
            const res = await login({email,password})
            console.log('res from login',res);
            dispatch(setCredentials({...res}))
            toast.success('Login success')
            navigate('/')
        } catch (err) {
            console.log('entered',err);
            toast.error(err?.data?.message || err.message);
        }
    }

    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    },[navigate,userInfo])
   
  return (
    <div className='flex justify-center items-center h-[80vh] bg-zinc-700'>
        <div className='h-[55vh] w-[35vw] rounded-lg bg-zinc-800 '>
            <form onSubmit={submitHandler}>
            <div className='ml-36 pt-3'>
            <h1 className='font-bold text-white text-3xl pb-12 mt-5 '>Login </h1>
            <input onChange={(e)=>setEmail(e.target.value)} className='h-9 w-72 rounded pl-3 mb-2 border-gray-300 shadow-md' type="text" placeholder='Enter your email' /> <br />
            <h1 className='text-lg text-white mb-5'>Email Address</h1>
            <input onChange={(e)=>setPassword(e.target.value)} className='h-9 w-72 border-2 border-gray-300 shadow-md rounded pl-3 mb-2'   type="text" placeholder='Enter your password' />
            <h1 className='text-lg text-white'>password</h1>

            <button type='submit' className='self-center bg-blue-600 text-white mt-3  text-lg px-6 py-1 rounded-md'>submit</button>

            </div>
            </form>

            

        </div>

    </div>
    
  )
}

export default LoginScreen