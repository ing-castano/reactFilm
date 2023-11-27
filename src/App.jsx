import React from 'react';
import {environment} from "@environments";
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './core/routes/app_router';
import RootProvider from './core/providers/root_provider';
import {NextUIProvider} from "@nextui-org/react";

// Swiper
// import function to register Swiper custom elements
import { register as registerSwiper } from 'swiper/element/bundle';
// register Swiper custom elements
registerSwiper();

const App = () => {
  return (
    <>
    {/*
      <div>App para PELIS</div>
      <h2>PRUEBA TEST</h2>
    */}
    {/*<h2>{environment.title}</h2>*/}
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <RootProvider>
          <RouterProvider router={appRouter} />
        </RootProvider>
      </main >
    </NextUIProvider>
    </>
  )
}

export default App