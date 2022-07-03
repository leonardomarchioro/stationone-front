import { Link } from "react-router-dom";

import Button from "../../components/Button";
import ModalResetPassword from "../../components/ModalResetPassword";
import Form from "../../components/FormEmailPassword";
import HeaderTitle from "../../components/HeaderTitle";

import { AnimatePresence, motion } from "framer-motion";

import { useCallback, useState } from "react";

import { Container } from "./styles";
import { pageSigninAnimation } from "../../utils/animations";

const SingIn = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const closeBackground = useCallback(() => {
    setModal(false);
  }, [setModal]);

  return (
    <motion.div
      initial={"inicio"}
      animate={"animacao"}
      variants={pageSigninAnimation}
    >
      <AnimatePresence exitBeforeEnter>
        {modal && <ModalResetPassword closeBackground={closeBackground} />}
      </AnimatePresence>
      <Container>
        <div className="top-container">
          <HeaderTitle text="SignIn" />
          <main className={modal ? "none-svg" : "main-form"}>
            <Form textButton={"SIGNIN"} />
            <Button onClick={showModal} type="button">
              FORGOT PASSWORD?
            </Button>
          </main>
        </div>
        <footer>
          <Link to="/signup">
            <Button>SIGNUP</Button>
          </Link>
        </footer>
      </Container>
    </motion.div>
  );
};

export default SingIn;
