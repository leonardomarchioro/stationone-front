import Button from "../Button";
import Input from "../Input";
import { Modal, ContainerModal } from "./styles";

import { motion, AnimatePresence } from "framer-motion";

import { useState, useCallback } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { backgroundAnimation, modalAnimation } from "../../utils/animations";

const ModalResetPassword = ({ closeBackground }) => {
  const [animate, setAnimate] = useState(true);

  const closeAnimate = useCallback(() => {
    setAnimate(false);
    setTimeout(() => closeBackground(), 500);
  }, [closeBackground]);

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <motion.div
      key="modal"
      initial={"inicio"}
      animate={"animacao"}
      exit={"fim"}
      variants={backgroundAnimation}
    >
      <ContainerModal>
        <AnimatePresence exitBeforeEnter>
          {animate && (
            <motion.div
              key="modal"
              initial={"inicio"}
              animate={"animacao"}
              exit={"fim"}
              variants={modalAnimation}
            >
              <Modal>
                <div>
                  <h1>Password Reset</h1>
                  <p>
                    Enter your email address and we'll send you instructions on
                    how to reset your password.
                  </p>
                  <form onSubmit={handleSubmit(handleLogin)}>
                    <Input
                      labelText="Email"
                      register={register}
                      name={"email"}
                      error={errors.email?.message}
                      placeholder="Enter email..."
                    />
                    <Button type="submit">SUBMIT</Button>
                  </form>
                  <Button
                    className="button-cancel"
                    onClick={closeAnimate}
                    type="button"
                  >
                    CANCEL
                  </Button>
                </div>
              </Modal>
            </motion.div>
          )}
        </AnimatePresence>
      </ContainerModal>
    </motion.div>
  );
};
export default ModalResetPassword;
