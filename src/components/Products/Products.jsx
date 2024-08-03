import { useOutletContext } from "react-router-dom";
import styles from "./Products.module.css";
import { useProducts, useProductsHandler } from "./ProductsHelper";

const Products = () => {
  const data = useProducts();
  const { addToCart } = useProductsHandler();


  if (!data) return "loading";

  return (
    <div className={styles.wrapper}>
      {data.map(product => {
        const itemId = "item-" + product.id;
        return (
          <div key={product.id} className={styles.product}>
            <img src={product.image} alt={product.title}/>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>{"Rating: " + product.rating.rate}</p>
            <p>{"Count: " + product.rating.count}</p>
            <label htmlFor={itemId}>Qty: </label>
            <input type="number" name={itemId} id={itemId} min={0} max={99} value={0}/>
            <button 
              type="submit" 
              onClick={(e) => {
                e.preventDefault();
                addToCart(product.id, document.querySelector(`#${itemId}`).value)
              }}
            >Add to cart</button>
          </div>
        )
      })}
    </div>
  )
}


const loader = async () => {

}


export {Products, loader }