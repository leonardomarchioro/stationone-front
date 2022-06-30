import Logo from "../../assets/logo.jpg"

import Button from "../../components/Button"
import { Link } from "react-router-dom"

import {MdOutlineRestaurantMenu} from "react-icons/md"

import { Container } from "./styles"

const Home = () => {
    return (
        <Container>
            <div className="img-container">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="buttons-container">
                <Link to={"/signup"}>
                    <Button className="singup-button">
                        <MdOutlineRestaurantMenu size={25}/>
                        Sing Up
                    </Button>
                </Link>
                <Link to={"/singin"}>
                    <Button>
                        Log In
                    </Button>
                </Link>
            </div>
        </Container>
    )
}

export default Home