import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Chat from './pages/chat/Chat.jsx';
import SignIn from './pages/signIn/SignIn.jsx';
import SignUp from './pages/signUp/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Home />
    )
  },
  {
    path: '/dashboard',

    children: [
      {
        path: "/dashboard",
        element: (
          <Dashboard />
        ),
      },
      {
        path: "/dashboard/chats/:id",
        element: <Chat />
      }
    ]
  },
  {
    path: '/signin',
    element: (
      <SignIn />
    )
  },
  {
    path: '/signup',
    element: (
      <SignUp />
    )
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
