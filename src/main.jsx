import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App.jsx';
import Login from './pages/Login/Login.jsx';
import SystemLayout from './components/SystemLayout.jsx';
import Users from './pages/Administration/Users.jsx';
import SideBarLinks from './pages/Administration/components/SideBarLinks.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/administration',
        children: [
          {
            index: true,
            element: <Navigate to="users" />
          },
          {
            path: 'users',
            element: (
              <SystemLayout
              title={'Sistema de Administracion'}
              sideBarLinks={<SideBarLinks selectedLink={'usuarios'} />}
              module={<Users />}
              />
            )
          },
          {
            path: 'checklist',
            element: (
              <SystemLayout
              title={'Sistema de Tickets'}
              sideBarLinks={<SideBarLinks selectedLink={'tickets'} />}
              module={<Users />}
              />
            )
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
