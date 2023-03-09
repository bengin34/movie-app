import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouter = () => {
  return (
    isLoggedin ? (
        <>
        <Outlet />
        </>

    ) : ( <Navigate to="/login"  />)
   
  )
}

export default PrivateRouter
