import { Container } from "./style";

const Input = ({ labelText, register, name, error, ...rest }) => {
  return (
    <Container error={error}>
      <label>{labelText}</label>
      <input {...register(name)} {...rest} />
      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default Input;
