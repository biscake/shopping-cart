import { useNavigate } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";

const NavBarButton = ({img, className = "", path, title, content, totalQuantity = ""}) => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        type="button"
        className={className}
        onClick={() => navigate(path)}
        title={title}
      >
        <img src={img} alt=""/>
        <span>{content}</span>
        {totalQuantity !== "" && <div className={styles.quantity}>{totalQuantity}</div>}
      </button>
    </div>
  )
}

export default NavBarButton;
