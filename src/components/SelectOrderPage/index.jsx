import { IoMdArrowRoundBack } from "react-icons/io";
import Button from "../Button";

const SelectOrderPage = ({ handlePage }) => {
  return (
    <>
      <IoMdArrowRoundBack size={30} onClick={() => handlePage("Time")} />
      <div>Select Your Order</div>
      <Button onClick={() => handlePage("Pay")}>Next</Button>
    </>
  );
};

export default SelectOrderPage;
