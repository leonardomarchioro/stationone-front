import Button from "../Button"
import Input from "../Input"
import { Modal, ContainerModal } from "./styles"

const ModalResetPassword = ({setModal}) => {

    const closeModal = () => {
        setModal(false)
    }

    return (
        <ContainerModal>
            <Modal>
                <div>
                    <h1>Password Reset</h1>
                    <p>
                        Enter your email address and we'll send you instructions on how to reset your password.
                    </p>
                    <form>
                        <Input label="Email" placeholder="Enter email..."/>
                        <Button type="submit">SUBMIT</Button>
                    </form>
                    <Button className="button-cancel" onClick={closeModal} type="button">CANCEL</Button>
                </div>
            </Modal>
        </ContainerModal>
    )
}
export default ModalResetPassword