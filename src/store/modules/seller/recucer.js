import { SELECT_SELLER, CLEAR_SELLER } from "./actionType";

const sellerReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_SELLER:
      state = { ...action.dataSeller };
      console.log(state);
      return state;

    case CLEAR_SELLER:
      state = {};
      console.log(state);

      return state;

    default:
      state = {};
      return state;
  }
};

export default sellerReducer;
