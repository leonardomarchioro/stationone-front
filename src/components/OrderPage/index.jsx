import { useState } from "react";

import FooterDash from "../FooterDahsboard";
import OrdersCards from "../OrdersCards";
import { Container, EmptyDiv, Header, Main } from "./styles";
import Empty from "../../assets/empty.jpg";

const OrderPage = ({ handlePage }) => {
  const [orders] = useState(
    JSON.parse(localStorage.getItem("@Orders:Data")) || null
  );

  return (
    <>
      <Container>
        <Header />
        <Main>
          <h2>My Orders</h2>
          {orders ? (
            <OrdersCards orders={orders} />
          ) : (
            <EmptyDiv>
              <h1>No List Items</h1>
              <img src={Empty} alt="empty cart" />
            </EmptyDiv>
          )}
        </Main>
      </Container>
      <FooterDash handlePage={handlePage} pageSelect="Orders" />
    </>
  );
};

export default OrderPage;
