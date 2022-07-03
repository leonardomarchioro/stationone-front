import { selectSeller, clearSeller } from "./actions";

const sellerThunk =
  (dataSeller = false, history) =>
  (dispatch) => {
    if (dataSeller) {
      dispatch(selectSeller(dataSeller));
      history.push("/seller");
    } else {
      dispatch(clearSeller());
      history.push("/dashboard");
    }
  };

export default sellerThunk;
