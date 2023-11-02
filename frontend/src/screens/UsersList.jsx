import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { 
    getUsers,
    
 } from '../../../backend/api/adminApi'
import EditPofile from './EditPofile'
import { userDetails } from '../slices/authSlice'
import { useDispatch } from 'react-redux'

const UsersList = () => {
    const [users,setUsers]=useState([])
    const dispactch = useDispatch()
    
    useEffect(()=>{
        getUsers().then((data)=>{
            console.log(data,'from userlist');
            let arr = Array.from(data)
            console.log(arr,'arr');
            setUsers(data.users)
        })
    },[])
    console.log(users,'users');
    const navigate = useNavigate()
    const edit = (user)=>{
        dispactch(userDetails(user))
        navigate('/edituser')
    }
    
  return (
    <div className='h-[89.5vh] bg-zinc-700 p-10'>
    
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Profile Image
                </th>
                <th scope="col" className="px-6 py-3">
                    User Name
                </th>
                <th scope="col" className="px-6 py-3">
                Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            { users?.map((user)=>(

                <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {user.profileImage ?  <img className='h-10 w-10 '  src={`http://localhost:5000/images/${user.profileImage}`} alt="" /> : <img className='h-10 w-10 '  src="https://static.vecteezy.com/system/resources/previews/016/293/983/non_2x/profile-avatar-ui-element-template-user-account-editable-isolated-dashboard-component-flat-user-interface-visual-data-presentation-web-design-widget-for-mobile-application-with-dark-theme-vector.jpg" alt="" />}
                </th>
                <td className="px-6 py-4">
                   
                    {user.name}  
                </td>
                <td className="px-6 py-4">
                {user.email}
                </td>
                <td className="px-6 py-4">
                    <button onClick={()=>edit(user)}  className='bg-transparent me-4 hover:bg-blue-400 text-blue-500 font-semibold hover:text-white py-1 px-3 border border-zinc-600 hover:border-transparent rounded'>Edit</button>
                </td>
            </tr>
            )) }
            
          
        </tbody>
    </table>
</div>
    
</div>
  )
}

export default UsersList