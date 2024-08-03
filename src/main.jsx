import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home/Home';
import { Products } from './components/Products/Products';
import "./reset.css";
import "./Global.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/products",
        element: <Products onClick={() => console.log("clicked")}/>,
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
