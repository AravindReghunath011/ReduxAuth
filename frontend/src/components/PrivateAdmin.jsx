import { Navigate,Outlet }  from 'react-router-dom'
import {useSelector} from 'react-redux'

import React from 'react'

const PrivateAdmin = () => {
    
    const {adminInfo} = useSelector((state)=>state.auth)
  return adminInfo ?  <Outlet/> : <Navigate to='/adminlogin'/> 
}

export default PrivateAdmin