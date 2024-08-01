const Button = ({type = "button", content, src = ""}) => {
  return (
    <div>
      <button type={type}>
        <img src={src} alt=""/>
        <span>{content}</span>
      </button>
    </div>
  )
}

export default Button;
