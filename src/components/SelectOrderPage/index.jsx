import { IoMdArrowRoundBack } from "react-icons/io";
import { MdShoppingCart, MdOutlineAddShoppingCart } from "react-icons/md";
import Button from "../Button";
import OrderProgress from "../OrderProgress";

import { Header, Container, Main, Footer } from "./styles";
import { useState } from "react";

const SelectOrderPage = ({ handlePage, payment }) => {
  const [quantity, setQuantity] = useState(0);
  console.log(payment.delivery);
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
          {payment.delivery((item) => {
            return (
              <li key={item.id}>
                <div>
                  <h2>{item.name}</h2>
                  <span>${item.price}</span>
                  <span>{item.description}</span>
                </div>
                <MdOutlineAddShoppingCart
                  onClick={() => setQuantity(quantity + 1)}
                />
                {quantity && <span>{quantity}</span>}
              </li>
            );
          })}
        </ul>
      </Main>
      <Footer>
        <Button onClick={() => handlePage("Pay")}>
          <MdShoppingCart /> Checkout - ({2})
        </Button>
      </Footer>
    </Container>
  );
};

export default SelectOrderPage;
