import React from 'react';
import {AuthProvider} from '../../core/auth/providers/auth_provider';
import FavoritesProvider from './favorites/favorites_provider';

const RootProvider = ({children}) => {
  return (
    <AuthProvider
      fallback={
      <div>
        <h1>Cargando...</h1>
      </div>
      } // reemplazo la pantalla por el cargando cuando todavia las peticiones no estan listas.
    >
        <FavoritesProvider>
            {children}
        </FavoritesProvider>
    </AuthProvider>
  )
}

export default RootProvider