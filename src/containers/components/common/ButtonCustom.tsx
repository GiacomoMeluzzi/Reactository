type ButtonProps = {
        type: "submit" | "button" | "reset"
        onClick?: ()=> void
        textContext?: string
        className?: string
    }

const ButtonCustom = ({type, onClick, textContext, className="btn btn-primary ms-2 mt-2"}:
     ButtonProps) => {

    return (
        <button 
            type={type} onClick={onClick}
            className={className}>
            {textContext} 
        </button>
         )}

export default ButtonCustom