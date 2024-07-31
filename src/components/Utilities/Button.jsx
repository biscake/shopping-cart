const Button = ({type = "button", content, src = ""}) => {
  return (
    <>
      <button type={type}>
        <img src={src} alt=""/>
        <span>{content}</span>
      </button>
    </>
  )
}

export default Button;
