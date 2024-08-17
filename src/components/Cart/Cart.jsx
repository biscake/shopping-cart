import { useOutletContext } from "react-router-dom"
import styles from "./Cart.module.css";
import { useState } from "react";
import { QuantityCtrl } from "../Utilities/Button";

const Cart = ({}) => {
  const [cart, setCart] = useOutletContext();
  console.log(cart);

  const updateCart = (id, qty) => {
    let tmp = cart.map(item => {
      console.log("item", item);
      if (item.productData.id === id) item.quantity = parseInt(qty);
      return item;
    });
    setCart(tmp)
  }

  return (
    <div className={styles.cartWrapper}>
      {cart.map(item => <CartItem key={item.id} item={item} updateCart={updateCart} />)}
    </div>
  )

}

const CartItem = ({ item, updateCart }) => {
  console.log("item",item);
  return (
    <div className={styles.itemWrapper}>
    <ProductImage src={ item.productData.image } />
    <h1 className={styles.title}>{item.productData.title}</h1>
    <ProductQuantity itemQuantity={item.quantity} updateCart={updateCart} itemId={item.productData.id}/>
    </div>
  )
}

const ProductImage = ({src}) => {
  return (
    <div className={styles.imageWrapper}>
      <img src={src} alt="" />
    </div>
  )
}

const ProductQuantity = ({ itemQuantity, updateCart, itemId }) => {
  const [quantity, setQuantity] = useState(itemQuantity);

  return (
    <div>
      <label htmlFor="quantity">Qty: </label>
      <input name="quantity" id="quantity" type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity}/>
      <QuantityCtrl quantity={quantity} setQuantity={setQuantity} />
      <button onClick={() => updateCart(itemId, quantity)}>Update Cart</button> 
    </div>
  )
}



export { Cart };
