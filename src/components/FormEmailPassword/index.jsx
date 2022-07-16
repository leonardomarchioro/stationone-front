import Button from "../Button";
import InputPassword from "../InpuPassword";
import Input from "../Input";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import registerThunk from "../../store/modules/register/thunk";
import loginThunk from "../../store/modules/login/thunk";
import { useHistory } from "react-router-dom";

const Form = ({ setModal = false, textButton }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sendDataRegister = (data) => {
    setModal(true);
    dispatch(registerThunk(data, "first"));
  };

  const sendDataLogin = (data) => {
    dispatch(loginThunk(data, history));
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid format email"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    textButton === "SIGNUP" ? sendDataRegister(data) : sendDataLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Input
        labelText="Email"
        register={register}
        name={"email"}
        error={errors.email?.message}
        type="email"
        placeholder="Enter email..."
      />
      <InputPassword
        labelText="Password"
        register={register}
        name={"password"}
        error={errors.password?.message}
        placeholder="Enter password..."
      />
      <Button type="submit">{textButton}</Button>
    </form>
  );
};

export default Form;
