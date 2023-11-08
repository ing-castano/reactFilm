import React from 'react'
import { useAuth } from '../../../core/auth/hooks/use_auth'
import HomeView from '../../home/views/home_view';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { validEmail, validPassword } from '../../../core/regex/regex';

const LoginView = () => {

  const {isLoggedIn, login} = useAuth();
  const [form, setForm] = useState({
    email: '',
    pass: ''
  });
  const [emailError, setEmailError] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [empty, setEmpty] = useState(false);
  

  const handleChange = (e) => {
    const {name, value} = e.target;

    if (name === "email" && !validEmail.test(value)) {
      setEmailError(true);
      setEmpty(false);
    } else {
      setEmailError(false);
    }

    if (name === "pass" && !validPassword.test(value)) {
      setPwdError(true);
      setEmpty(false);
    } else {
      setPwdError(false);
    }

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  }

  const resetForm = () => {
    setForm({
      email: '',
      pass: ''
    });
    setEmailError(false);
    setPwdError(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, pass } = Object.fromEntries(new FormData(e.target));

    if (emailError || pwdError) {
      resetForm();
      alert('Email o contraseña inválidos')
    }
    else if (email === '' || pass === '')
      setEmpty(true);
    else
      login(form.email, form.pass);
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Log in</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input name='email' type='email' onChange={handleChange} value={form.email} placeholder='email@something.com' />
          <div>
          {emailError ? <p>email incorrecto!</p> : <span></span>} 
          </div>

          <input name='pass' type='password' onChange={handleChange} value={form.pass} placeholder='your password'/>
          <div>
            {pwdError ? <p>
              mínimo 6 caracteres <br /> 
              Por lo menos una letra mayúscula <br /> 
              Por lo menos una letra minúscula <br /> 
              Por lo menos un caracter especial </p> : <span></span>
              } 
          </div>
           <button>Iniciar Sesión</button>
           <div>
              {empty && <p>Los campos no pueden estar vacíos</p>}
           </div>
        </form>
      </div>
    </>
  )
}

export default LoginView