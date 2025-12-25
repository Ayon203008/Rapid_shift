import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}= useAuth()
    if(loading){
    return "Show any loading here from daisy ui or shadcn ui"
    }
    if(!user){
        <Navigate to={'/login'}></Navigate>
    }
    return children
};

export default PrivateRoute;