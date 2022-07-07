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

      localStorage.setItem("@OrderDate:Date", JSON.stringify(product.date));
    } else if (status === "set_quantity") {
      const dataProducts = product.filter((item) => item.quantity);

      localStorage.setItem("@Payment:Data", JSON.stringify(product));
      localStorage.setItem("@Cart:Data", JSON.stringify(dataProducts));

      dispatch(setQuantity(product));
    } else if (status === "confirm") {
      const orders = JSON.parse(localStorage.getItem("@Orders:Data"));
      const sellerData = JSON.parse(localStorage.getItem("@Seller:Data"));
      const orderDate = JSON.parse(localStorage.getItem("@OrderDate:Date"));
      const cartData = JSON.parse(localStorage.getItem("@Cart:Data"));

      const orderData = {
        sellerId: sellerData.id,
        sellerName: sellerData.name,
        sellerLocation: sellerData.location,
        cartData,
        orderDate,
      };

      dispatch(confirmOrder(orderData));

      localStorage.setItem(
        "@Orders:Data",
        JSON.stringify(orders ? [...orders, orderData] : [orderData])
      );

      history.push("/dashboard");
    }
  } else {
    dispatch(cancelOrder());

    localStorage.removeItem("@Cart:Data");

    history.push("/dashboard");
  }
};

export default paymentThunk;
