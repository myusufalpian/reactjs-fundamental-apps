import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './pages/SignUp.tsx'
import SignIn from './pages/SignIn.tsx'
import ErrorPage from './pages/404.tsx'
import ProductsPage from './pages/Products.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signin',
    element: <SignIn />,
    errorElement: <ErrorPage />
  },
  {
    path: '/products',
    element: <ProductsPage />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
