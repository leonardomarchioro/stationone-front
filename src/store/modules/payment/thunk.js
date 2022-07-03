import {
  initialOrder,
  setTimeOrder,
  setQuantity,
  confirmOrder,
  cancelOrder,
} from "./actions";

const paymentThunk = (product, status, history) => (dispatch) => {
  if (product) {
    if (status === "initial") {
      dispatch(initialOrder(product));
      history.push("/payment");
    } else if (status === "set_time") {
      dispatch(setTimeOrder(product));
      console.log("set_time");
    } else if (status === "set_quantity") {
      dispatch(setQuantity(product));
      console.log("set_quantity");
    } else if (status === "confirm") {
      console.log("Confirm");
      dispatch(confirmOrder(product));
      history.push("/dashboard");
    }
  } else {
    dispatch(cancelOrder());
  }
};

export default paymentThunk;
