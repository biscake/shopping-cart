import styles from "./ProductsModal.module.css";
import { useState, useEffect } from "react";

const ProductModal = ({ productData, closeModal, addToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const [cartStatus, setCartStatus] = useState(null);

  useEffect(() => {
    setCartStatus(null);
  }, [quantity])

  return (
    <div className={styles.modal} id="modalBg" onClick={(e) => closeModal(e.target.id)}>
      <div className={styles.modalContent}>
        <button className={styles.closeModal} type="button" id="closeModal" onClick={(e) => closeModal(e.target.id)}>X</button> 
        <img className={styles.image} src={productData.image} alt={productData.title}/>
        <ModalRight
          quantity={quantity}
          setCartStatus={setCartStatus}
          setQuantity={setQuantity}
          addToCart={addToCart}
          cartStatus={cartStatus}
          productData={productData}
        />
      </div>
    </div>
  )
}


const Buy = ({quantity, setQuantity, addToCart, setCartStatus, id}) => {
  return (
    <>
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
        <QuantityCtrl
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <button 
          className={styles.productButton}
          type="submit" 
          onClick={(e) => {
            e.preventDefault();
            addToCart(id, quantity) ? setCartStatus("success") : setCartStatus("fail");     
          }}
        >
        Add to cart
        </button>
      </div>
    </>
  )
}


const QuantityCtrl = ({quantity, setQuantity}) => {
  const increment = () => {
    const tmp = parseInt(quantity);
    if (tmp + 1 <= 99) setQuantity(tmp + 1);
  }

  const decrement = () => {
    const tmp = parseInt(quantity);
    if (tmp - 1 >= 0) setQuantity(tmp - 1)
  }

  return (
    <>
      <button className={styles.quantityCtrl} onClick={increment}>&#8593;</button>
      <button className={styles.quantityCtrl} onClick={decrement}>&#8595;</button>
    </>
  )
}

const CartStatus = ({ cartStatus }) => {
  if (cartStatus === "success") return <span className={styles.cartSuccess}>Item(s) successfully added to cart!</span>;
  if (cartStatus === "fail") return <span className={styles.cartFail}>Please enter a valid quantity</span>;

  return <></>
}

const ModalRight = ({ quantity, setQuantity, addToCart, setCartStatus, cartStatus, productData }) => {
  return (
    <>
      <div className={styles.modalTextContainer} >
        <h1 className={styles.title}>{productData.title}</h1>
        <p className={styles.description}>{productData.description}</p>
        <p className={styles.price}>${productData.price}</p>
        <Buy
          quantity={quantity}
          setQuantity={setQuantity}
          addToCart={addToCart}
          setCartStatus={setCartStatus}
          id={productData.id}
        />
        <CartStatus cartStatus={cartStatus} />
      </div>
    </>
  )
}

export { ProductModal }