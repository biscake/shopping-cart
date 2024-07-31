import { useNavigate } from "react-router-dom";

const NavBarButton = ({img, className = "", path, title, content}) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => navigate(path)}
        title={title}
      >
        <img src={img} alt=""/>
        <span>{content}</span>
      </button>
    </>
  )
}

export default NavBarButton;
