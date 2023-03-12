import React ,{useContext} from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { UserContext } from '../context/AuthContext'
import {auth} from "../auth/firebase-config"


const PrivateRouter = () => {
  const {user} = useContext(UserContext)

  return  (
    auth.currentUser ? (
        <>
        <Outlet />
        </>

    ) :  (
     
       <Navigate to="/login"  />)
   
  )
}

export default PrivateRouter
