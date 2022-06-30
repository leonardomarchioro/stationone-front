import { FiEyeOff, FiEye } from "react-icons/fi";
import { Container } from "./styles";

import { useState } from "react";

const InputPassword = ({ labelText, register, name, error, ...rest }) => {
  const [type, setType] = useState("password");
  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <Container error={error}>
      <label>{labelText}</label>
      <input {...register(name)} type={type} {...rest} />
      {type === "password" ? (
        <FiEye onClick={showPassword} color={"#ccc9c9"} />
      ) : (
        <FiEyeOff onClick={showPassword} color={"#ccc9c9"} />
      )}
      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default InputPassword;
