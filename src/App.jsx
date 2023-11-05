import React from 'react';
import {environment} from "@environments";
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './core/routes/app_router';

const App = () => {
  return (
    <>
    {/*
      <div>App para PELIS</div>
      <h2>PRUEBA TEST</h2>
    */}
      <RouterProvider router={appRouter} />
      <h2>{environment.title}</h2>
    </>
  )
}

export default App