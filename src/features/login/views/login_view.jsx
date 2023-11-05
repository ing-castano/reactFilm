import React from 'react'
import { useAuth } from '../../../core/auth/hooks/use_auth'
import HomeView from '../../home/views/home_view';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginView = () => {

  const {isLoggedIn, login} = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>ReactFilms</h1>
        {JSON.stringify(isLoggedIn)}
      </div>
      <div>
        <button onClick={login}>Iniciar Sesión</button>
        <button onClick={()=>(navigate('/'))}>Home</button>
      </div>
    </>
  )
}

export default LoginView