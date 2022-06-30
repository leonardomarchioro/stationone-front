import { Container } from "./style";

const Input = ({label, ...rest}) => {
    return (
        <Container>
            <label>{label}</label>
            <input {...rest}/>
        </Container>
    )
}

export default Input;