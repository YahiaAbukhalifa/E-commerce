import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import HomePage from './assets/components/HomePage/HomePage.jsx'
import Offers from './assets/components/Offers/Offers.jsx'
import Products from './assets/components/products/products.jsx'
import ProductDetails from './assets/components/productDetails/productDetails.jsx'


const router = createHashRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/offers',
    element:<Offers/>
  },
  {
    path:'/products',
    element:<Products/>
  },
  {
    path:'/productinfo',
    element:<ProductDetails/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
