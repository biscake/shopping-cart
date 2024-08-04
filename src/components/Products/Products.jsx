import styles from "./Products.module.css";
import { useProducts, useProductsHandler } from "./ProductsHelper";
import { useState } from "react";

const Products = () => {
  const data = useProducts();
  const { addToCart } = useProductsHandler();
  const [modalId, setModalId] = useState(null);

  function showModal(id) {
    setModalId(id);
  }

  function closeModal() {
    setModalId(null);
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
            showModal={showModal} 
            closeModal={closeModal}
          />
        )}
      </div>
      {modalId && 
        <ProductModal
          closeModal={closeModal}
          data={data}
          modalId={modalId}
        />}
    </>
  )
}

const Product = ({ product, addToCart, showModal, closeModal }) => {
  const [quantity, setQuantity] = useState(0);


  const itemId = "item-" + product.id;
  return (
    <div key={product.id} className={styles.productWrapper}>
      <img className={styles.image} src={product.image} alt={product.title}/>
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.price}>${product.price}</p>
      <button 
        type="button" 
        className={styles.viewproduct}
        onClick={() => showModal(product.id)}
      >
        View product
      </button> 
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

const ProductModal = ({ data, closeModal, modalId }) => {
  const modaldata = data.find(product => product.id === modalId)

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent} >
        <span>ajlsdjflas</span>
      </div>
      testing
    </div>
  )
}



export { Products }
