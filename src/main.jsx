import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './Home/Home';
import Products from './components/Products/Products';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductDetails from './components/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/products',
        element:<Products></Products>
      },
      {
        path:'/blogs',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/sign',
        element:<Register></Register>
      },
      {
        path:'/catag/:id',
        element:<ProductDetails></ProductDetails>,
        loader: () => fetch('/CataData.json')   //changes made here
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
