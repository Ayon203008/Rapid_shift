import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}= useAuth()
    const location =useLocation()

    if(loading){
    return "Show any loading here from daisy ui or shadcn ui"
    }
    if(!user){
      return  <Navigate state={{from:location.pathname}} to={'/login'}></Navigate>
    }
    // * If you dont return Navigate to the login will not working
    // * and use of location redirect the page again

    return children
};

export default PrivateRoute;