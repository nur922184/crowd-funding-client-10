import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import LoadingPage from '../Component/LoadingPage';

const PrivatRoute = ({ children }) => {
    const { user , loading} = useContext(AuthContext)
    const location =useLocation();
    // console.log(location)
    if (loading) {
        return <LoadingPage></LoadingPage>
    }
    if (user && user?.email) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivatRoute;