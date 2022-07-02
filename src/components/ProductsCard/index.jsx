import { Container } from "./styles";

const ProductCard = ({ delivery }) => {
  return (
    <Container>
      <img src={delivery.imgUrl} alt={delivery.name} />
      <span>${delivery.price.toFixed(2)}</span>
      <h3>{delivery.name}</h3>
      <p>{delivery.description}</p>
    </Container>
  );
};
export default ProductCard;
