import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import type { RootState } from "../../../store/store.ts"
import ButtonCustom from "../common/ButtonCustom.tsx"

const LoggedHome = () => {

    const history = useHistory()
    const {email} = useSelector((state: RootState) => state.user)
 
    return (
        <>
            <div>Benvenuto, {email}!</div>

            <ButtonCustom type={"button"} onClick={()=>history.push("/users")} textContext="Tabella"/>
        </>
    )
}

export default LoggedHome