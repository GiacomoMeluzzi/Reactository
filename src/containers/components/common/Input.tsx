type InputProp = {
    type: "text" | "number" | "password" | "email" | "checkbox"
    className?: string
    id: string
    textContext?: string
}

const Input = ({type, id, className}: InputProp) => {

    return (
            <input type={type} className={className} id={id}/>
    )
}

export default Input