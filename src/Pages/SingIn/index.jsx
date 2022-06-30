import { VscCircleFilled } from "react-icons/vsc"
import { Link } from "react-router-dom"

import Button from "../../components/Button"
import InputPassword from "../../components/InpuPassword"
import Input from "../../components/Input"
import ModalResetPassword from "../../components/ModalResetPassword"

import { useState } from "react"

import { Container } from "./styles"

const SingIn = () => {
    const [modal, setModal]= useState(false)

    const showModal = () => {
        setModal(true)
    }

    return (
        <>
        {modal && (<ModalResetPassword setModal={setModal}/>)}
        <Container>
             <div className="top-container">
                <header>
                    {[1,2,3].map(()=><VscCircleFilled color={"#F4A15D"}/>)}
                    <h1>Login</h1>
                    {[1,2,3].map(()=><VscCircleFilled color={"#F4A15D"}/> )}
                </header>
                <main>
                    <form>
                        <Input label="Email" type="email" placeholder="Enter email..."/>
                        <InputPassword label="Password" placeholder="Enter password..."/>
                        <Button type="submit">LOGIN</Button>
                    </form>
                    <Button onClick={showModal} type="button">FORGOT PASSWORD?</Button>
                </main>
            </div>
            <footer>
                <Link to="/signup">
                    <Button>
                        SIGNUP
                    </Button>
                </Link>
            </footer>
        </Container>
        </>
    )
}

export default SingIn