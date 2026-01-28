type InputProp = {
    type: "text" | "number" | "password" | "email" | "checkbox" | "date"
    className?: string
    id: string
    textContext?: string
    setGenerico: React.Dispatch<React.SetStateAction<string>>
    value: string | number | readonly string[]
}

const Input = ({type, id, className, setGenerico, value}: InputProp) => {

    return (
            <input type={type} className={className} id={id} value={value}
             onChange={(event) => setGenerico(event.target.value)}/>
    )
}

export default Input

export type {InputProp}