import { IoMdArrowRoundBack } from "react-icons/io";
import { BsCartDash, BsCartPlus } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";

import Button from "../Button";
import OrderProgress from "../OrderProgress";

import { useHistory } from "react-router-dom";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import paymentThunk from "../../store/modules/payment/thunk";

import { Header, Container, Main, Footer } from "./styles";

const SelectOrderPage = ({ handlePage }) => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const history = useHistory();

  const payment = JSON.parse(localStorage.getItem("@Payment:Data")) || null;

  if (!payment) {
    history.push("/seller");
  }

  const dispatch = useDispatch();

  const [prodcuts, setProdcuts] = useState(payment);

  const [quantity, setQuantity] = useState(
    prodcuts.reduce((acc, cur) => (acc += cur.quantity), 0) || 0
  );

  const increment = (index) => {
    if (prodcuts[index].quantity) {
      prodcuts[index].quantity += 1;
    } else {
      prodcuts[index].quantity = 1;
    }
    setQuantity(quantity + 1);
    setProdcuts(prodcuts);
    forceUpdate();
  };

  const decrement = (index) => {
    prodcuts[index].quantity -= 1;
    setQuantity(quantity - 1);
    setProdcuts(prodcuts);
    forceUpdate();
  };

  const payNow = () => {
    handlePage("Pay");

    dispatch(paymentThunk(prodcuts, "set_quantity"));
  };

  return (
    <Container>
      <Header>
        <div>
          <IoMdArrowRoundBack size={30} onClick={() => handlePage("Time")} />
        </div>
        <h1>Select Your Order</h1>
      </Header>
      <OrderProgress progress={2} />
      <Main>
        <h1>Add Items to Your Order</h1>
        <ul>
          {prodcuts.map((item, index) => {
            return (
              <li key={item.id}>
                <div className="infos">
                  <h2>{item.name}</h2>
                  <span>${item.price}</span>
                  <span>{item.description}</span>
                </div>
                <div className="add">
                  {item.quantity > 0 && (
                    <BsCartDash onClick={() => decrement(index)} />
                  )}
                  <span>{item.quantity || 0}</span>
                  <BsCartPlus onClick={() => increment(index)} />
                </div>
              </li>
            );
          })}
        </ul>
      </Main>
      <Footer>
        <Button onClick={payNow}>
          <MdShoppingCart /> Checkout - ({quantity})
        </Button>
      </Footer>
    </Container>
  );
};

export default SelectOrderPage;
