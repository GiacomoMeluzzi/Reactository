import { Container } from "react-bootstrap";
import Input from "../common/Input";
import ButtonCustom from "../common/ButtonCustom";
import { useState } from "react";
import type { UserCredentials } from "../common/type/CommonType";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { UserState } from "../../../store/userSlice";
import { setUser } from "../../../store/userSlice";

const Login = ()=>{

    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userCredentials] = useState<UserCredentials>({mail: "malu@mail.it", password: "123"})


const HandleSubmit = () => {
    if (email === userCredentials.mail && password === userCredentials.password) {
        dispatch(setUser({user: "malu", email} as UserState))
        history.push("/loggedhome")
    }
}

return (
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <form className="p-5 border rounded bg-light" style={{width: "700px"}}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <br></br>
                        <Input id="user" type="text" textContext="Email"
                         value={email} setGenerico={setEmail}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <br></br>
                        <Input id="password" type="password" value={password}
                         textContext="Password" setGenerico={setPassword}/>
                    </div>
                    <div>
                        <ButtonCustom type={"button"} textContext="Login!"
                        onClick={HandleSubmit}/>
                    </div>
                </form>                
            
            </Container> )
}

export default Login