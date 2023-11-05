import React from 'react';
import {AuthProvider} from '../../core/auth/providers/auth_provider';

const RootProvider = ({children}) => {
  return (
    <AuthProvider>
        {children}
    </AuthProvider>
  )
}

export default RootProvider