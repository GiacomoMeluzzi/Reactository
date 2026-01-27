import { useHistory } from "react-router-dom"
import Button from "../common/Button"

const Home = () => {

    const history = useHistory()

    return (

        <div>   
            <h1>
                Benvenuto!
                <br></br>
            </h1>
                <Button type={"button"} textContext="Login" 
                onClick={()=> history.push("/login")}/>
        </div>
    )

}
export default Home