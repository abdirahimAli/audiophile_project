import React, { Children } from 'react'
import { Navigate } from 'react-router';
const Protectedroute = ({ children,cheackout }) => {
  if (!cheackout) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Protectedroute