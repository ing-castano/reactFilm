import React from 'react'
import { useAuth } from '../../../core/auth/hooks/use_auth'

const HomeView = () => {

  const {isLoggedIn, login, logout} = useAuth();

  return (
    <>
    <div>
      <h1>HomeView</h1>
      {JSON.stringify(isLoggedIn)}
    </div>
    
    <button onClick={logout}>Logout</button>
    </>
  )
}

export default HomeView