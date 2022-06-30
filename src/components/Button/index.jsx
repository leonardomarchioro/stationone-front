import { Container } from "./style"

const Button = ({children, ...rest}) => {
    return (
        <Container>
            <button {...rest}>{children}</button>
        </Container>
    )
}

export default Button