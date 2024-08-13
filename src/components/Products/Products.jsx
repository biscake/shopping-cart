import { useOutletContext } from "react-router-dom";
import styles from "./Products.module.css";
import { useProducts } from "./ProductsHelper";
import { useEffect, useState } from "react";
import { ProductModal } from "./ProductsModal";

const Products = () => {
  const [cart, setCart, addToCart] = useOutletContext();
  const [modalId, setModalId] = useState(null);

  const [data, err] = useProducts();

  function closeModal(elementId) {
    if (elementId === "closeModal" || elementId === "modalBg") {
      setModalId(null);
    }
  }

  if (!data) return "loading";


  return (
    <>
      <div className={styles.wrapper}>
        {data.map(product => 
          <Product 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
            setModalId={setModalId} 
          />
        )}
      </div>
      {modalId && 
        <ProductModal
          closeModal={closeModal}
          productData={data.find(product => product.id === modalId)}
          addToCart={addToCart}
        />}
    </>
  )
}

const Product = ({ product, setModalId }) => {
  return (
    <div key={product.id} className={styles.productWrapper}>
      <img className={styles.image} src={product.image} alt={product.title}/>
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.price}>${product.price}</p>
      <button 
        type="button" 
        className={styles.viewproduct}
        onClick={() => setModalId(product.id)}
      >
        View product &gt;
      </button> 

    </div>
  )
}





export { Products }
