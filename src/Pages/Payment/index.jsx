import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PayPage from "../../components/PayPage";
import SelectOrderPage from "../../components/SelectOrderPage";
import SetPickUpTimePage from "../../components/SetPickupTimePage";
import sellerThunk from "../../store/modules/seller/thunk";

const Payment = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  let { payment } = useSelector((state) => state);

  if (!Object.keys(payment).length) {
    payment = JSON.parse(localStorage.getItem("@Payment:Data")) || null;

    if (!payment) {
      history.push("/seller");
    }
  }

  const [page, setPage] = useState("Time");

  const handlePage = (selectPage) => {
    setPage(selectPage);
  };

  const callSellerPage = (data) => {
    dispatch(sellerThunk(data, history));
  };

  return (
    <>
      {page === "Time" && (
        <SetPickUpTimePage
          handlePage={handlePage}
          payment={payment}
          callSellerPage={callSellerPage}
        />
      )}
      {page === "Order" && (
        <SelectOrderPage handlePage={handlePage} payment={payment} />
      )}
      {page === "Pay" && <PayPage handlePage={handlePage} payment={payment} />}
    </>
  );
};

export default Payment;
