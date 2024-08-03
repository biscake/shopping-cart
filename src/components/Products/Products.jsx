import styles from "./Products.module.css";
import { useProducts } from "./ProductsHelper";

const Products = ({ onClick }) => {
  const data = useProducts();

  if (!data) return "loading";

  return (
    <div className={styles.wrapper}>
      {data.map(product => {
        return (
          <div key={product.id} className={styles.product} id={"item-" + product.id}>
            <img src={product.image} alt={product.title}/>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>{"Rating: " + product.rating.rate}</p>
            <p>{"Count: " + product.rating.count}</p>
            <button type="submit" onClick={onClick}>Add to cart</button>
          </div>
        )
      })}
    </div>
  )
}

const loader = async () => {

}


export {Products, loader }