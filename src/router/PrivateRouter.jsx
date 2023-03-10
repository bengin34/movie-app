import React ,{useContext} from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { UserContext } from '../context/AuthContext'



const PrivateRouter = () => {
  const {user} = useContext(UserContext)
  console.log(user)
  return (
    user?.email && user?.password ? (
        <>
        <Outlet />
        </>

    ) :  (
     
       <Navigate to="/login"  />)
   
  )
}

export default PrivateRouter
