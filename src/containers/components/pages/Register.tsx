import ButtonCustom from "../common/ButtonCustom"
import InputDiv from "../common/InputDiv"
import { Container } from "react-bootstrap"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../../../store/userListSlice"
import type { UserCredentials } from "../common/type/CommonType"
import useModal from "../hooks/useModal"
import ModalCustom from "../common/ModalCustom"

const Register = () => {

    const dispatch = useDispatch()

    const {show, handleClose, openModal} = useModal({initialShow:false, path:("/home")})

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [nome, setNome] = useState("")
    const [cognome, setCognome] = useState("")
    const [datanascita, setDatanascita] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        const nuovoUtente: UserCredentials = {
                user:        username,
                mail:        email,
                nome:        nome,
                cognome:     cognome,
                password:    password,
                dataNascita: datanascita
        }
        dispatch(addUser(nuovoUtente))
        openModal()
    }

    const handleReset = () => {
        setEmail("")
        setUsername("")
        setNome("")
        setCognome("")
        setDatanascita("")
        setPassword("")
    }

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <form className="p-5 border rounded bg-light" style={{width: "700px"}}>
                <InputDiv input={{type: "text", id: "email",
                        setGenerico: setEmail,
                        value: email
                    }} textContext={"Email"}/>

                <InputDiv input={{type: "text", id: "username",
                        setGenerico: setUsername,
                        value: username
                    }} textContext={"Username"}/>

                <InputDiv input={{type: "text", id: "nome",
                        setGenerico: setNome,
                        value: nome
                    }} textContext={"Nome"}/>

                <InputDiv input={{type: "text", id: "cognome",
                        setGenerico: setCognome,
                        value: cognome
                    }} textContext={"Cognome"}/>

                <InputDiv input={{type: "date", id: "datanascita",
                        setGenerico: setDatanascita,
                        value: datanascita
                    }} textContext={"Data di nascita"}/>

                <InputDiv input={{type: "password", id: "password",
                        setGenerico: setPassword,
                        value: password
                    }} textContext={"Password"}/>

                <ButtonCustom type={"button"} onClick={handleSubmit} textContext="Registrati!"/>

                <ButtonCustom type={"button"} onClick={handleReset} textContext="Cancella dati"/>
                
                <ModalCustom 
                    type={0}
                    show={show} 
                    handleClose={handleClose} 
                    textContext={"Registrazione effettuata!"} 
                    title={"Successo!"}    
                />
            </form>
        </Container>
    )
}

export default Register