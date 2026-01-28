import type { InputProp } from "./Input"
import Input from "./Input"

type InputProps = {
    className?: string
    classNameLab?: string
    htmlFor?: string
    textContext: string
    input: InputProp
}

const InputDiv = ({className = "mb-3", htmlFor="exampleInputEmail1", classNameLab,
     textContext, input}: InputProps) => {
    
    return (
        <div className={className}>
            <label className={classNameLab} htmlFor={htmlFor}>{textContext}</label>     
            <br></br>
            <Input type={input.type} id={input.id} value={input.value} setGenerico={input.setGenerico}/>
        </div>
    )

}

export default InputDiv