import {type ReactNode } from "react"
import type { RootState } from "../../store/store.ts"
import { useSelector } from "react-redux"
import ModalCustom from "../components/common/ModalCustom.tsx"
import useModal from "../components/hooks/useModal.ts"

type PropsPrivateRoute = {
    children: ReactNode
}

const PrivateRoute = ({children}: PropsPrivateRoute) => {

    const isLogged = useSelector((state: RootState) => state.user.isLogged)
    const {show, handleClose} = useModal({path: "/login", initialShow: true})

    if(!isLogged) {            
            return (
                <ModalCustom 
                    type={0}
                    show={show} 
                    handleClose={handleClose} 
                    textContext={"Devi loggarti!"} 
                    title={"Login richiesto"}>                    
                </ModalCustom>
            )            
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default PrivateRoute