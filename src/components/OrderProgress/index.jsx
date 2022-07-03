import { Container } from "./styles";

const OrderProgress = ({ progress }) => {
  return (
    <Container>
      <div
        className={progress === 1 ? "one" : progress === 2 ? "two" : "three"}
      >
        <span>{progress === 1 && "1"}</span>
        <div></div>
        <span>{progress === 2 && "2"}</span>
        <div></div>
        <span>{progress === 3 && "3"}</span>
      </div>
    </Container>
  );
};

export default OrderProgress;
