import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading) {
        return <span className="loading flex items-center justify-center my-30 mx-auto loading-spinner text-error"></span>
    }

    if(!user ){
        return <Navigate state={location.pathname} to="/signIn"></Navigate>
    }

    return children;
};

export default PrivateRoute;