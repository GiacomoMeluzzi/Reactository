import { Container } from "react-bootstrap";
import Input from "../common/Input";
import ButtonCustom from "../common/ButtonCustom";
import { use, useState } from "react";
import type { UserCredentials } from "../common/type/CommonType";
import { useHistory } from "react-router-dom";

const Login = ()=>{

    const history = useHistory()
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [UserCredentials] = useState<UserCredentials>({user: "malu", password: "123"})

return (
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <form className="p-5 border rounded bg-light" style={{width: "700px"}}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <br></br>
                        <Input id="user" type="text" textContext="Username"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <br></br>
                        <Input id="password" type="password" textContext="Password"/>
                    </div>

                    <div className="mb-3 ms-3 form-check">
                        <label className="form-check-label">Accetti le condizioni? </label>
                        <Input id="agreement" type="checkbox" textContext="Accetti?"/>
                        <br></br>
                    </div>
                    <div>
                        <ButtonCustom type={"button"} textContext="Login!"
                        onClick={()=>console.log("Ciao")}/>
                    </div>
                </form>                
            
            </Container> )
}

export default Login