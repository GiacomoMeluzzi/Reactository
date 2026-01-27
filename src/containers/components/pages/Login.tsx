import Button from "../common/Button"; 
import Input from "../common/Input";

const Login = ()=>{

return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <form className="p-5 border rounded bg-light" style={{width: "700px"}}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <Input id="user" type="text" textContext="Username"/>
                </div>

        <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <Input id="password" type="password" textContext="Password"/>
                </div>

                <div className="mb-3 form-check">
                </div>
                    <Input id="agreement" type="checkbox" textContext="Accetti?"/>
                </form>
                
                    <Button type={"button"} textContext="Login!" className={"btn-danger"}
                    onClick={()=>console.log("Ciao")}/>
        
        </div> )
}

export default Login