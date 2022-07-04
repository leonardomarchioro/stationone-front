import { SELECT_SELLER, CLEAR_SELLER } from "./actionType";

const seller = JSON.parse(localStorage.getItem("@Seller:Data")) || {};

const sellerReducer = (state = seller, action) => {
  switch (action.type) {
    case SELECT_SELLER:
      state = { ...action.dataSeller };

      return state;

    case CLEAR_SELLER:
      state = {};

      return state;

    default:
      state = {};
      return state;
  }
};

export default sellerReducer;
