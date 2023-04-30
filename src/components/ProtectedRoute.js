import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...props }) => {
  return localStorage.getItem('jwt') !== null ? (
    <Component {...props} />
  ) : (
    <Navigate
      to='/'
      replace={true}
    />
  );
};

export default ProtectedRoute;
