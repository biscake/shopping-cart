import { useEffect, useState } from "react";

const useProducts = () => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null)

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://fakestoreapi.com/products', {signal: signal})
      .then(res => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Failed with an error code ${res.status}`);
      })
      .then(json => setData(json))
      .catch(err => setErr(err))
  }, [])

  return [data, err];
}

export { useProducts }