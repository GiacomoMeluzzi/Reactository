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
                <ButtonCustom type={"button"} textContext="Login" 
                onClick={()=> history.push("/login")}/>
        </div>
    )

}
export default Home