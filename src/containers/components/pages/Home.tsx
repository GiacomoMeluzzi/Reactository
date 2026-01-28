/*
const handleChange = (e.changeEvent<HTMLElement>) => {
    const {nome, value} = e.target
    setFormData({
    ...FormData,
    [nome] : value
    })
}
 */
import { useHistory } from "react-router-dom"
import ButtonCustom from "../common/ButtonCustom"
import useModal from "../hooks/useModal"
import ModalCustom from "../common/ModalCustom"

const Home = () => {

    const history = useHistory()
    const {show, handleClose, openModal} = useModal({initialShow:false})

    return (

        <div>   
            <h1>
                Benvenuto!
                <br></br>
            </h1>

            <ModalCustom 
                show={show}
                handleClose={handleClose}
                textContext="Sono una modale"
                title="Ciao, tonno!"
            />

            <ButtonCustom
                type="button"
                textContext="Modal!"
                onClick={()=> openModal()}
            />

            <ButtonCustom 
                type={"button"} 
                textContext="Registrati" 
                onClick={()=> history.push("/registrazione")}
            />

            <ButtonCustom 
                type={"button"} 
                onClick={()=>history.push("/users")} 
                textContext="Tabella"
                />
            
        </div>
    )

}
export default Home