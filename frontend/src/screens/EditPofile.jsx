import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {editUser} from '../../../backend/api/adminApi'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'



const EditPofile = () => {
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const navigate = useNavigate()
  const {userForEdit} = useSelector(state=>state.auth)
   
   
      useEffect(()=>{
        setEmail(userForEdit.email)
        setName(userForEdit.name)
      },[userForEdit.name,userForEdit.email])
  
   console.log(email,'email userforedit');

   const submitHandler = (e)=>{
    e.preventDefault()
    const data = {
      email,
      name,
      userForEdit
    }
    editUser(data).then(()=>{
      console.log('entered then');
      toast.success('User updated')
      navigate('/userslist')
    }).catch((err)=>{
      console.log('error edit');
      toast.error(err.message)
    })
    
    
   }
  return (
    <div className='flex justify-center items-center h-[89.5vh] bg-zinc-700'>
    <div className='h-[55vh] w-[35vw] rounded-lg bg-zinc-800 '>
        <form onSubmit={submitHandler}>
        <div className='ml-36 pt-2'>
        <h1 className='font-bold text-white text-3xl pb-12 mt-5 '>Edit User </h1>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='h-9 w-72 rounded pl-3 mb-2 border-gray-300 shadow-md' type="text" placeholder='Enter your name' /> <br />
        <h1 className='text-lg text-white mb-5'>Name</h1>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} className='h-9 w-72 border-2 border-gray-300 shadow-md rounded pl-3 mb-2'   type="text" placeholder='Enter your email' />
        <h1 className='text-lg text-white'>Email Address</h1>

        <button type='submit' className='self-center bg-blue-600 text-white mt-10  text-lg px-6 py-1  rounded-md'>submit</button>

        </div>
        </form>

        

    </div>

</div>
  )
}

export default EditPofile