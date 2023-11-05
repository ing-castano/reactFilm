import React from 'react';
import {environment} from "@environments";
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './core/routes/app_router';
import RootProvider from './core/providers/root_provider';

const App = () => {
  return (
    <>
    {/*
      <div>App para PELIS</div>
      <h2>PRUEBA TEST</h2>
    */}
    {/*<h2>{environment.title}</h2>*/}
    <RootProvider>
      <RouterProvider router={appRouter} />
    </RootProvider>
    </>
  )
}

export default App