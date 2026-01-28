import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DangerMessage = "Danger!"
const DangerTitle = "DANGER"
const WarningMessage ="Warning!"
const WarningTtile = "WARNING"

type PropsModalCustom = {
    show: boolean
    handleClose: () => void
    variant?: string
    textContext?: string
    title?: string
    type: 0 | 1 | 2
}

const typeChoice = {
    variant: ["primary", "danger", "warning"],
    textContext: ["", DangerMessage, WarningMessage],
    title: ["", DangerTitle, WarningTtile]
}

function ModalCustom({
    show, 
    handleClose, 
    type, 
    title=typeChoice.title[type],
    variant=typeChoice.variant[type],
    textContext=typeChoice.textContext[type]
    }: PropsModalCustom) {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{textContext}</Modal.Body>
                <Modal.Footer>
                    <Button variant={variant} onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCustom;