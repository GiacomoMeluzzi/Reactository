import { useSelector } from "react-redux"
import type { RootState } from "../../../store/store.ts"

const LoggedHome = () => {

    const {email} = useSelector((state: RootState) => state.user)
 
    return (
        <>
            <div>Benvenuto, {email}!</div>
        </>
    )

}

export default LoggedHome