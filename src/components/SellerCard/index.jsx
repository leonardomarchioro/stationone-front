import { IoLocationSharp } from "react-icons/io5";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import sellerThunk from "../../store/modules/seller/thunk.js";
import { Container } from "./styles";

const SellerCard = ({ product }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const callSellerPage = () => {
    dispatch(sellerThunk(product, history));
  };

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
        <Button onClick={callSellerPage}>SEE PRODUCTS</Button>
      </Container>
    </>
  );
};
export default SellerCard;
