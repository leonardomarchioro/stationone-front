import { Link } from "react-router-dom";
import { Container } from "./style";

import { AnimatePresence, motion } from "framer-motion";
import { pageSignupAnimation } from "../../utils/animations";

import Button from "../../components/Button";
import Form from "../../components/FormEmailPassword";
import HeaderTitle from "../../components/HeaderTitle";
import ModalExtraInfos from "../../components/ModalExtraInfos";

import { useCallback, useState } from "react";

const SignUp = () => {
  const [modal, setModal] = useState(false);

  const closeBackground = useCallback(() => {
    setModal(false);
  }, [setModal]);

  return (
    <motion.div
      initial={"inicio"}
      animate={"animacao"}
      variants={pageSignupAnimation}
    >
      <AnimatePresence exitBeforeEnter>
        {modal && (
          <ModalExtraInfos
            setModal={setModal}
            closeBackground={closeBackground}
          />
        )}
      </AnimatePresence>
      <Container>
        <div className="top-container">
          <HeaderTitle text="SignUp" />
          <main className={modal ? "none-svg" : "main-form"}>
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
