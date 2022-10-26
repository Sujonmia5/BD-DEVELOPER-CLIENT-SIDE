import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Context/Context';

const PrivetRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()

    if (loader) {
        return <Loading />
    }

    if (user && user.email) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivetRoute;