import FooterDash from "../FooterDahsboard";

const OrderPage = ({ handlePage }) => {
  return (
    <>
      <div>Order</div>
      <FooterDash handlePage={handlePage} pageSelect="Orders" />
    </>
  );
};

export default OrderPage;
