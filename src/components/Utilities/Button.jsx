const Button = ({type = "button", content, src = ""}) => {
  return (
    <>
      <button type={type}>
        {content}
        <img src={src} alt=""/>
      </button>
    </>
  )
}

export default Button;
