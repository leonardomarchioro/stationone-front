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
      localStorage.setItem("@Payment:Data", JSON.stringify(product.delivery));
      history.push("/payment");
    } else if (status === "set_time") {
      dispatch(setTimeOrder(product));
      console.log(product);
    } else if (status === "set_quantity") {
      const dataProducts = product.filter((item) => item.quantity);
      localStorage.setItem("@Payment:Data", JSON.stringify(product));
      localStorage.setItem("@Cart:Data", JSON.stringify(dataProducts));
      dispatch(setQuantity(product));
      console.log(product);
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
