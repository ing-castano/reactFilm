import React from 'react'
import { useAuth } from '../../../core/auth/hooks/use_auth'
import HomeView from '../../home/views/home_view';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { validEmail, validPassword } from '../../../core/regex/regex';
import {Button} from "@nextui-org/button";
import {Card, CardHeader, CardBody, CardFooter, Divider, Input} from "@nextui-org/react";
import video_url from '../../../assets/bg-video.mp4'


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
    /* esto es para el sign up en realidad
    if (name === "pass" && !validPassword.test(value)) {
      setPwdError(true);
      setEmpty(false);
    } else {
      setPwdError(false);
    }
    */
    if (value === '') {
      if (name === 'email') {
        setEmailError(false);
      }
      if (name === 'pass') {
        setPwdError(false);
      }
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
      <div className="flex flex-col justify-center items-center w-screen min-h-screen">
        <video autoPlay loop muted src={video_url} className=" absolute w-auto min-w-full min-h-full max-w-none" />
        <Card className="w-[400px]  bg-gradient-to-b from-purple-500 to-pink-500">
          <CardHeader className="flex justify-center gap-3">
            <h1 className="text-3xl font-bold ">Log in</h1>
          </CardHeader>

          <Divider/>

          <CardBody>      
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-3">
                <Input 
                  size="md" 
                  name="email" 
                  type="email" 
                  label="Email" 
                  color={emailError ? "danger" : "default"}
                  errorMessage={emailError && "Por favor escriba un mail válido"}
                  onChange={handleChange} 
                  value={form.email} 
                  placeholder="Enter your email" />
                  
                <Input 
                  size="md" 
                  name="pass" 
                  type="password" 
                  label="Password" 
                  onChange={handleChange} 
                  value={form.pass} 
                  placeholder="Enter your password" />
                { /* Guardo este errorHandler para el sign up
                <div>
                  {pwdError ? <p>
                    mínimo 6 caracteres <br /> 
                    Por lo menos una letra mayúscula <br /> 
                    Por lo menos una letra minúscula <br /> 
                    Por lo menos un caracter especial </p> : <span></span>
                    } 
                </div>
                  */}
                <Button color="primary" variant="solid" type='submit'>Iniciar Sesión</Button>
                <div className="text-red-800 text-center">
                    {empty && <p>Los campos no pueden estar vacíos</p>}
                </div>
              </div>
            </form>
          </CardBody>

          <CardFooter>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default LoginView