import { Component } from 'react';
import {createBrowserRouter} from 'react-router-dom';
import HomeView from '../../features/home/views/home_view';
import LoginView from '../../features/login/views/login_view';
import PrivateRoutes from '../auth/components/private_route';

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
        element: <LoginView />
    },
]);