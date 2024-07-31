import { useEffect, useState } from "react"

const Products = () => {
  const data = useProducts();
  console.log('data',data)

  if (!data) return "loading";

  if (data) return (
    <>
      {data.map(product => {
        return (
          <div key={product.id}>
            <img src={product.image} alt=""/>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Rating: {product.rating.rate}</p>
            <p>Count: {product.rating.count}</p>
          </div>
        )
      })}
    </>
  )
}

const loader = async () => {

}

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

export {Products, loader}