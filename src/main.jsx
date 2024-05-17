import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App.jsx';
import Login from './pages/Login/Login.jsx';
import Users from './pages/Administration/pages/Users/Users.jsx';
import SideBarLinks from './pages/Administration/components/SideBarLinks.jsx';
import AdministrationLayout from './pages/Administration/AdministrationLayout.jsx';
import './index.css';
import Tickets from './pages/Administration/pages/Tickets/Tickets.jsx';

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
              <AdministrationLayout
                sideBarLinks={<SideBarLinks selectedLink={'usuarios'} />}
                module={<Users />}
              />
            )
          },
          {
            path: 'checklist',
            element: (
              <AdministrationLayout
                sideBarLinks={<SideBarLinks selectedLink={'tickets'} />}
                module={<Tickets />}
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
