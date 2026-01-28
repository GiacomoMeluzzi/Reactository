import { useHistory } from "react-router-dom"
import ButtonCustom from "../common/ButtonCustom"

const Home = () => {

    const history = useHistory()

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

            <ButtonCustom type={"button"} onClick={()=>history.push("/users")} textContext="Tabella"/>
        </div>
    )

}
export default Home