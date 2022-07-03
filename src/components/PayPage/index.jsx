import { IoMdArrowRoundBack } from "react-icons/io";

const PayPage = ({ handlePage }) => {
  return (
    <>
      <IoMdArrowRoundBack size={30} onClick={() => handlePage("Order")} />
      <div>Pay for Your Food</div>
    </>
  );
};

export default PayPage;
