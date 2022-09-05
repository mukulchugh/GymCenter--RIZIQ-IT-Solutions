import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthUser from '../../../../hooks/AuthUser/AuthUser';

const RequireUser = ({ children }) => {
    const location = useLocation();
    const { userRole, logout } = AuthUser()
    if (userRole !== 'user') {
        logout()
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};
export default RequireUser;