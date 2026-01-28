import { useHistory } from "react-router-dom"
import ButtonCustom from "../common/ButtonCustom"

const Home = () => {

    const history = useHistory()

    /*
    const handleChange = (e.changeEvent<HTMLElement>) => {
        const {nome, value} = e.target
        setFormData({
        ...FormData,
        [nome] : value
        })
    }
     */

    return (

        <div>   
            <h1>
                Benvenuto!
                <br></br>
            </h1>
            <div>
                <ButtonCustom type={"button"} textContext="Login" 
                onClick={()=> history.push("/login")}/>
            </div>
            <div>
                <ButtonCustom type={"button"} textContext="Registrati" 
                onClick={()=> history.push("/registrazione")}/>
            </div>

            
        </div>
    )

}
export default Home