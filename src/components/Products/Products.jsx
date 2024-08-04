import { useOutletContext } from "react-router-dom";
import styles from "./Products.module.css";
import { useProducts } from "./ProductsHelper";
import { useState } from "react";

const Products = () => {
  const [cart, setCart, addToCart] = useOutletContext();
  const [modalId, setModalId] = useState(null);

  const data = useProducts();

  function showModal(id) {
    setModalId(id);
  }

  function closeModal(elementId) {
    console.log(elementId)
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
          addToCart={addToCart}
        />}
    </>
  )
}

const Product = ({ product, showModal, closeModal }) => {
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
        View product &gt;
      </button> 

    </div>
  )
}

const ProductModal = ({ data, closeModal, modalId, addToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const modalData = data.find(product => product.id === modalId)

  return (
    <div className={styles.modal} id="modalBg" onClick={(e) => closeModal(e.target.id)}>
      <div className={styles.modalContent}>
        <button className={styles.closeModal} type="button" id="closeModal" onClick={(e) => closeModal(e.target.id)}>X</button> 
        <img className={styles.image} src={modalData.image} alt={modalData.title}/>
        <h1 className={styles.title}>{modalData.title}</h1>
        <p className={styles.description}>{modalData.description}</p>
        <p className={styles.price}>${modalData.price}</p>
        <div className={styles.buy} >
          <label htmlFor="add">Qty: </label>
          <input 
            type="number" 
            name="add" 
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
              addToCart(modalData.id, quantity)
            }}
          >
          Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}



export { Products }
