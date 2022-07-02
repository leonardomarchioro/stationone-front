import { IoLocationSharp } from "react-icons/io5";
import Button from "../Button";

import { Container } from "./styles";

const SellerCard = ({ product, showInfos }) => {
  return (
    <>
      <Container>
        <div className="top">
          <h1>{product.name}</h1>
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="bottom">
          <div className="location">
            <IoLocationSharp color={"#424242"} />
            <span>{product.location}</span>
          </div>
          <p>{product.description}</p>
        </div>
        <Button onClick={() => showInfos(product.id)}>SEE PRODUCTS</Button>
      </Container>
    </>
  );
};
export default SellerCard;
