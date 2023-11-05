import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import  {useSelector } from 'react-redux'
import Dropdown from '../components/Dropdown.jsx'
import ProfileImage from './Profile.jsx'



const Header = () => {
  const {userInfo} = useSelector((state)=>state.auth)
  const {adminInfo} = useSelector((state)=>state.auth)


  
  return (
    <>
      <div className='h-20 bg-zinc-800 pt-5 flex justify-between'>
        <div className='text-white ml-10 font-bold text-xl '>Mern Auth</div>
        {userInfo||adminInfo ?<div className='flex text-white text-lg gap-5 pr-10 '>
        
        {userInfo?.profileImage||adminInfo?.profileImage ? <ProfileImage userInfo={userInfo||adminInfo}/> : ''}
        <Dropdown/>
        
      </div>
         :<div className='flex text-white text-lg gap-5 pr-10 '>
          <span><Link to={'/login'}> sign In</Link></span>
          <span><Link to={'/register'}>sign up</Link></span>
          
        </div> 
        
        }
        

      </div>
    </>
  )
}

export default Header