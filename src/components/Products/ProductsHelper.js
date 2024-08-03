import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const useProducts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://fakestoreapi.com/products', {signal: signal})
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Failed with an error code ${res.status}`);
      })
      .then(json=> setData(json))
      .catch(err => console.error(err))
    
    return () => controller.abort();
  }, [])

  return data;
}

function useProductsHandler() {
  const [cart, setCart] = useOutletContext();

  function addToCart(id, quantity) {
    console.log(cart)
    setCart(
      [
        ...cart,
        {id, quantity}
      ]
    )
  }

  return { addToCart }
}

export { useProducts, useProductsHandler }