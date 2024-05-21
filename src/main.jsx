import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import App from './App.jsx';
import Login from './pages/Login/Login.jsx';
import Users from './pages/Administration/pages/Users/Users.jsx';
import AdministrationSideBarLinks from './pages/Administration/components/AdministrationSideBarLinks.jsx';
import AdministrationLayout from './pages/Administration/AdministrationLayout.jsx';
import Tickets from './pages/Administration/pages/Tickets/Tickets.jsx';
import Dashboard from './pages/Administration/pages/Dashboard/Dashboard.jsx';
import Employee from './pages/Administration/pages/Employee/Employee.jsx';
import './index.css';
import Customer from './pages/Administration/pages/Customer/Customer.jsx';
import MyTickets from './pages/Administration/pages/MyTickets/MyTickets.jsx';

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
            path: 'dashboard',
            element: (
              <AdministrationLayout
                sideBarLinks={
                  <AdministrationSideBarLinks selectedLink={'dashboard'} />
                }
                module={<Dashboard />}
              />
            )
          },
          {
            path: 'users',
            element: (
              <AdministrationLayout
                sideBarLinks={
                  <AdministrationSideBarLinks selectedLink={'usuarios'} />
                }
                module={<Users />}
              />
            )
          },
          {
            path: 'tickets',
            element: (
              <AdministrationLayout
                sideBarLinks={
                  <AdministrationSideBarLinks selectedLink={'tickets'} />
                }
                module={<Tickets />}
              />
            )
          },
          {
            path: 'employees',
            element: (
              <AdministrationLayout
                sideBarLinks={
                  <AdministrationSideBarLinks selectedLink={'empleados'} />
                }
                module={<Employee />}
              />
            )
          },
          {
            path: 'customers',
            element: (
              <AdministrationLayout
                sideBarLinks={
                  <AdministrationSideBarLinks selectedLink={'clientes'} />
                }
                module={<Customer />}
              />
            )
          },
          {
            path: 'my-tickets',
            element: (
              <AdministrationLayout
                sideBarLinks={
                  <AdministrationSideBarLinks selectedLink={'mi tickets'} />
                }
                module={<MyTickets />}
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
