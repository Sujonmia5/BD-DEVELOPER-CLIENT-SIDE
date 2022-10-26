import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const PrivetRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()

    if (loader) {
        return <h1>this loading</h1>
    }

    if (user && user.email) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivetRoute;