import { Component } from 'react';
import {createBrowserRouter} from 'react-router-dom';
import HomeView from '../../features/home/views/home_view';
import LoginView from '../../features/login/views/login_view';
import PrivateRoutes from '../auth/components/private_route';
import PublicRoute from '../auth/components/public_route';

export const appRouter = createBrowserRouter([
    {
        path: '/',  
        element: (
            <PrivateRoutes>
                <HomeView />
            </PrivateRoutes>
        ),
    },
    {
        path: '/login',
        element: (
            <PublicRoute>
                <LoginView />
            </PublicRoute>
        ),
    },
    {
        path: '*',
        element: <div>No se encontró la pagina</div>
    }
]);