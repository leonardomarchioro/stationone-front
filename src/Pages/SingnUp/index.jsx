import { Link } from "react-router-dom";
import { Container } from "./style";

import { motion } from "framer-motion";
import { pageSignupAnimation } from "../../utils/animations";

import Button from "../../components/Button";
import Form from "../../components/FormEmailPassword";
import HeaderTitle from "../../components/HeaderTitle";
import ModalExtraInfos from "../../components/ModalExtraInfos";

import { useState } from "react";

const SignUp = () => {
  const [modal, setModal] = useState(false);

  return (
    <motion.div
      initial={"inicio"}
      animate={"animacao"}
      variants={pageSignupAnimation}
    >
      {modal && <ModalExtraInfos setModal={setModal} />}
      <Container>
        <div className="top-container">
          <HeaderTitle text="SignUp" />
          <main>
            <Form setModal={setModal} textButton={"SIGNUP"} />
          </main>
        </div>
        <footer>
          <Link to="/signin">
            <Button>ALREADY HAVE AN ACCOUNT?</Button>
          </Link>
        </footer>
      </Container>
    </motion.div>
  );
};

export default SignUp;
