import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
 } from 'react-router-dom'
import store from './store.js'
import { Provider } from 'react-redux'
import { HomeScreen } from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import SingupScreen from './screens/SingupScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import ImageUpload from './components/ImageUpload.jsx'
import UsersList from './screens/UsersList.jsx'
import EditPofile from './screens/EditPofile.jsx'
import PrivateAdmin from './components/PrivateAdmin.jsx'

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
      <Route  path='/login' element={<LoginScreen/>}/>
      <Route  path='/upload' element={<ImageUpload/>}/>
      <Route  path='/register' element={<SingupScreen/>}/>
      <Route path='' element={<PrivateRoute/>}>
        <Route  path='/profile' element={<ProfileScreen/>}/>
      </Route>
  
     
     
      <Route path='' element={<PrivateAdmin/>}>
      <Route  path='/admin'  element={<HomeScreen isAdmin={true}/>}/>
      <Route  path='/edituser'  element={<EditPofile/>}/>
      <Route  path='/userslist'  element={<UsersList />}/>
      </Route>
      <Route  path='/adminlogin'  element={<LoginScreen isAdmin={true}/>}/>
    </Route>
  
  
  )
 )

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
  </Provider>


)
