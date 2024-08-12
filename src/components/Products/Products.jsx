import { useOutletContext } from "react-router-dom";
import styles from "./Products.module.css";
import modalStyles from "./ProductsModal.module.css"
import { useProducts } from "./ProductsHelper";
import { useState } from "react";

const Products = () => {
  const [cart, setCart, addToCart] = useOutletContext();
  const [modalId, setModalId] = useState(null);

  const [data, err] = useProducts();

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
  const modalData = data.find(product => product.id === modalId);
  const [cartStatus, setCartStatus] = useState(null); 

  return (
    <div className={modalStyles.modal} id="modalBg" onClick={(e) => closeModal(e.target.id)}>
      <div className={modalStyles.modalContent}>
        <button className={modalStyles.closeModal} type="button" id="closeModal" onClick={(e) => closeModal(e.target.id)}>X</button> 
        <img className={modalStyles.image} src={modalData.image} alt={modalData.title}/>
        <div className={modalStyles.modalTextContainer} >
          <h1 className={modalStyles.title}>{modalData.title}</h1>
          <p className={modalStyles.description}>{modalData.description}</p>
          <p className={modalStyles.price}>${modalData.price}</p>
          <div className={modalStyles.buy} >
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
              className={modalStyles.productButton}
              type="submit" 
              onClick={(e) => {
                e.preventDefault();
                addToCart(modalData.id, quantity) ? setCartStatus("success") : setCartStatus("fail");     
              }}
            >
            Add to cart
            </button>
          </div>
          {
            cartStatus === "success"
             ? <span className={modalStyles.cartSuccess}>Item(s) successfully added to cart!</span>
             : <span className={modalStyles.cartFail}>Please enter a valid quantity</span>
          }
        </div>
      </div>
    </div>
  )
}



export { Products }
