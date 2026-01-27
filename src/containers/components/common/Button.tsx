type ButtonProps = {
        type: "submit" | "button" | "reset"
        onClick?: ()=> void
        textContext?: string
        className?: string
    }

const Button = ({type, onClick, textContext, className="btn btn-Primary"}:
     ButtonProps) => {

    return (
        <button 
            type={type} onClick={onClick}
            className={className}>
            {textContext} 
        </button>
         )}

export default Button