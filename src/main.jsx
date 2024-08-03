import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import { Products } from './components/Products/Products';
import "./reset.css";
import "./Global.css"
import App from './components/App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />,
        // children: [
        //   {
        //     path: "/products/:name",
        //     element: <ProductDetails />,
        //     loader: ProductLoader,
        //   }
        // ]
      },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
