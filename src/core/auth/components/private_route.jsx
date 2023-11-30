import React from 'react';
import { useAuth } from '../hooks/use_auth';
import {Navigate} from 'react-router-dom';

const PrivateRoutes = ({children}) => {

  const {isLoggedIn} = useAuth();

  if (isLoggedIn) return children;

  return <Navigate to={"/login"} />;
};

export default PrivateRoutes