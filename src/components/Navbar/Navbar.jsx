import Button from "../Utilities/Button";
import shoppingCartImg from "../assets/Navbar/shopping-cart.svg";
import shopImg from "../assets/Navbar/shop.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div style={styles}>
      <Button type="button" src={shopImg} content="Shop Now"/>
      <Button type="button" src={shoppingCartImg} content="Shopping Cart"/>
    </div>
  )
}

export default Navbar;