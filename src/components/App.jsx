import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import { useState } from "react"

const App = () => {
  const [cart, setCart] = useState([]);

  function addToCart(id, quantity) {
    if (quantity === 0) return;
    setCart(
      [
        ...cart,
        {id, quantity}
      ]
    )
  }
  
  return (
  <>
    <Navbar cart={cart} />
    <Outlet context={[cart, setCart, addToCart]}/>
  </>
  )
}

export default App