import { Link, NavLink, useOutletContext } from "react-router-dom";
import Button from "../Utilities/Button";
import shopImg from "../assets/Navbar/shop.svg";
import shoppingCartImg from "../assets/Navbar/shopping-cart.svg";
import homeImg from "../assets/Navbar/home.png"
import styles from "./Navbar.module.css";
import NavBarButton from "../Utilities/Button";

const Navbar = ({ cart }) => {
  const totalQuantity = 0 || cart.reduce((acc, current) => {
    return acc + parseInt(current.quantity);
  }, 0)

  return (
    <div className={styles.wrapper}>
      <div className={styles.left} >
        <NavBarButton path="/" className={styles.home} title="Home" img={homeImg}/>
        <a href="http://www.freepik.com" className={styles.attribution}>Designed by macrovector / Freepik</a>
      </div>
      <div className={styles.right}>
        <NavBarButton 
          title="Shop Now" 
          path="/products" 
          className={styles.navbutton} 
          img={shopImg} 
          content="Shop Now"
        />
        <NavBarButton 
          title="Cart" 
          path="/cart" 
          className={styles.navbutton} 
          img={shoppingCartImg} 
          content="Cart"
          totalQuantity={totalQuantity} 
        />
      </div>
    </div>
  )
}

export default Navbar;