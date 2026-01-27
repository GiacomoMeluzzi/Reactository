type InputProp = {
    type: "text" | "number" | "password" | "email" | "checkbox"
    className?: string
    id: string
    textContext?: string
}

const Input = ({type, id, textContext, className = "form-control"}: InputProp) => {

    return (
        <input type={type} className={className} id={id}>
            {textContext}
        </input>
    )
}

export default Input