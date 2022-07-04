import { selectSeller, clearSeller } from "./actions";

const sellerThunk =
  (dataSeller = false, history) =>
  (dispatch) => {
    if (dataSeller) {
      dispatch(selectSeller(dataSeller));
      localStorage.setItem("@Seller:Data", JSON.stringify(dataSeller));
      history.push("/seller");
    } else {
      dispatch(clearSeller());
      history.push("/dashboard");
    }
  };

export default sellerThunk;
