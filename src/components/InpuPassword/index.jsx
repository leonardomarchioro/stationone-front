import {FiEyeOff, FiEye} from "react-icons/fi"
import { Container } from "./styles"

import { useState } from "react"



const InputPassword = ({label, ...rest}) => {
    const [type, setType] = useState("password")
    const showPassword = () => {
        type === "password" ? setType("text") : setType("password")
    }


    return (
        <Container>
            <label>{label}</label>
            <input type={type}{...rest}/>
            <div>
                {type === "password" ? <FiEye onClick={showPassword} color={"#ccc9c9"}/> : <FiEyeOff onClick={showPassword} color={"#ccc9c9"}/>}
            </div>
        </Container>
    )
}

export default InputPassword;