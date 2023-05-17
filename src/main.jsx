import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Route/Route'
import AuthProvider from './components/authContextApi/AuthProvider'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto p-10'>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <Toaster/>
    </AuthProvider>
    </div>
  </React.StrictMode>,
)
