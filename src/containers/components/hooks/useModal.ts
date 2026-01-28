import { useState } from "react"
import { useHistory } from "react-router-dom"

type modalProps = {
    initialShow: boolean
    path?: string
}

const useModal = ({path, initialShow}: modalProps) => {
    const history = useHistory()
    const [show, setShow] = useState(initialShow)

    const handleClose = () => {
            setShow(initialShow)
            if (path) {
                history.push(path)
            }
        }

    const openModal = () => {
        setShow(true)
    }

    return {show, handleClose, openModal}
}

export default useModal