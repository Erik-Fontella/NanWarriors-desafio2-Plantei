import "./Button.css"

interface Button{
    text: string
}

const Button: React.FC<Button> = (props) => {

  return <button>{props.text}</button>
  
}

export default Button