import type { ReactNode } from "react"
import type { RootState } from "../../store/store.ts"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

type PropsPrivateRoute = {
    children: ReactNode
}

const PrivateRoute = ({children}: PropsPrivateRoute) => {

    const history = useHistory()
    const isLogged = useSelector((state: RootState) => state.user.isLogged)

    if(!isLogged) {
        history.push("/login")
        alert("Devi loggarti, pippa!")
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default PrivateRoute