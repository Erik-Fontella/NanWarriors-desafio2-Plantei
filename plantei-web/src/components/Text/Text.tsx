import "./Text.css"

interface Text{
    text: string
}

const Text: React.FC<Text> = (props) => {
    return <p>{props.text}</p>
}

export default Text