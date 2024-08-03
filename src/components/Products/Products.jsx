import styles from "./Products.module.css";
import { useProducts, useProductsHandler } from "./ProductsHelper";
import { useState } from "react";

const Products = () => {
  const data = useProducts();
  const { addToCart } = useProductsHandler();


  if (!data) return "loading";

  return (
    <div className={styles.wrapper}>
      {data.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)}
    </div>
  )
}

const Product = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const itemId = "item-" + product.id;
  return (
    <div key={product.id} className={styles.productWrapper}>
      <img className={styles.image} src={product.image} alt={product.title}/>
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>${product.price}</p>
      <p className={styles.rating}>{"Rating: " + product.rating.rate + `/5.0 (${product.rating.count})`}</p>
      <div className={styles.buy} >
        <label htmlFor={itemId}>Qty: </label>
        <input 
          type="number" 
          name={itemId} 
          id={itemId} 
          min={0} 
          max={99} 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button 
          className={styles.productButton}
          type="submit" 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product.id, document.querySelector(`#${itemId}`).value)
          }}
        >
        Add to cart
        </button>
      </div>
    </div>
  )
}


const loader = async () => {

}


export {Products, loader }
