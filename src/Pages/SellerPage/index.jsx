import ProductCard from "../../components/ProductsCard";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Container, Footer, Header, Main } from "./style";
import Button from "../../components/Button";

import { useDispatch, useSelector } from "react-redux";
import paymentThunk from "../../store/modules/payment/thunk";

import { useHistory } from "react-router-dom";

const SellerPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { seller } = useSelector((state) => state);
  console.log(seller);
  if (seller === {}) {
    history.push("/dashboard");
  }

  const buyProduct = () => {
    dispatch(paymentThunk(seller, "initial", history));
  };
  console.log(seller);
  return (
    <Container>
      <Header>
        <div>
          <IoMdArrowRoundBack
            size={30}
            onClick={() => history.push("/dashboard")}
          />
        </div>
        <h1>{seller.name}</h1>
      </Header>
      <Main>
        <img src={seller.imgUrl} alt={seller.name} />
        <div>
          <h2>{seller.name}</h2>
          <span>Ready for delivery</span>
          <ul>
            {seller.delivery.map((item) => {
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
