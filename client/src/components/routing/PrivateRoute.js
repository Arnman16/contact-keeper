import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import authContext from '../../context/auth/authContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(authContext);

  return !loading && !isAuthenticated ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
