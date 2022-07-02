import {
  INITIAL,
  SET_TIME,
  SET_QUANTITY,
  CONFIRME_PAYMENT,
  CANCEL_ORDER,
} from "./actionsType";

const paymentReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIAL:
      state = { ...action.product };
      return state;

    case SET_TIME:
      state = { ...state, ...action.time };
      return state;

    case SET_QUANTITY:
      state = { ...state, ...action.quantity };
      return state;

    case CONFIRME_PAYMENT:
      state = {};
      return state;

    case CANCEL_ORDER:
      state = {};
      return state;

    default:
      state = {};
      return state;
  }
};

export default paymentReducer;
