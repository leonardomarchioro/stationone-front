import ProductCard from "../ProductsCard";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Container, Footer, Header, Main } from "./style";
import Button from "../Button";

import { useDispatch } from "react-redux";
import paymentThunk from "../../store/modules/payment/thunk";

import { useHistory } from "react-router-dom";

const SellerPage = ({ setInfos, product }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const buyProduct = () => {
    dispatch(paymentThunk(product, "initial", history));
  };

  return (
    <Container>
      <Header>
        <div>
          <IoMdArrowRoundBack size={30} onClick={() => setInfos(false)} />
        </div>
        <h1>{product.name}</h1>
      </Header>
      <Main>
        <img src={product.imgUrl} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <span>Ready for delivery</span>
          <ul>
            {product.delivery.map((item) => {
              return <ProductCard key={item.id} delivery={item} />;
            })}
          </ul>
        </div>
      </Main>
      <Footer>
        <Button onClick={buyProduct} type="button">
          START ORDER
        </Button>
      </Footer>
    </Container>
  );
};
export default SellerPage;
