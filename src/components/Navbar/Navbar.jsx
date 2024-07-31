import Button from "../Utilities/Button";
import shoppingCart from "../assets/Navbar/shopping-cart.svg";

const Navbar = () => {
  return (
    <>
      <Button type="button" src={shoppingCart} />
    </>
  )
}

export default Navbar;