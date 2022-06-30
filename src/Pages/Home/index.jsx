import Logo from "../../assets/logo.jpg"

import Button from "../../components/Button"

import {MdOutlineRestaurantMenu} from "react-icons/md"

import { Container } from "./styles"

const Home = () => {
    return (
        <Container>
            <div className="img-container">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="buttons-container">
                <Button className="singup-button">
                    <MdOutlineRestaurantMenu size={25}/>
                    Sing Up
                </Button>
                <Button>Log In</Button>
            </div>
        </Container>
    )
}

export default Home