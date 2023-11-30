import React from 'react';
import {AuthProvider} from '../../core/auth/providers/auth_provider';

const RootProvider = ({children}) => {
  return (
    <AuthProvider
      fallback={
      <div>
        <h1>Cargando...</h1>
      </div>
      } // reemplazo la pantalla por el cargando cuando todavia las peticiones no estan listas.
    >
        {children}
    </AuthProvider>
  )
}

export default RootProvider