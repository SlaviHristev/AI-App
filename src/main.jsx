import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Chat from './pages/chat/Chat.jsx';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import SignIn from './pages/signIn/SignIn.jsx';
import SignUp from './pages/signUp/SignUp.jsx';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sign-in/*",
        element: <SignIn />
      },
      {
        path: "/sign-up/*",
        element: <SignUp />
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashbard/chats/:id",
            element: <Chat />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
