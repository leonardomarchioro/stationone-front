import { Link } from "react-router-dom"

import {VscCircleFilled} from "react-icons/vsc"
import Button from "../../components/Button"
import InputPassword from "../../components/InpuPassword"
import Input from "../../components/Input"

import { Container } from "./style"

const SignUp = () => {
    return (
        <Container>
            <div className="top-container">
                <header>
                    {[1,2,3].map(()=><VscCircleFilled color={"#F4A15D"}/>)}
                    <h1>Signup</h1>
                    {[1,2,3].map(()=><VscCircleFilled color={"#F4A15D"}/> )}
                </header>
                <main>
                    <form>
                        <Input label="Email" type="email" placeholder="Enter email..."/>
                        <InputPassword label="Password" placeholder="Enter password..."/>
                        <Button type="submit">SIGNUP</Button>
                    </form>
                </main>
            </div>
            <footer>
                <Link to="/signin">
                    <Button>
                        ALREADY HAVE AN ACCOUNT?
                    </Button>
                </Link>
            </footer>
        </Container>
    )
}

export default SignUp