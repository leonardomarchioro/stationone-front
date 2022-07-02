import {
  INITIAL,
  SET_TIME,
  SET_QUANTITY,
  CONFIRME_PAYMENT,
  CANCEL_ORDER,
} from "./actionsType";

export const initialOrder = (product) => ({
  type: INITIAL,
  product,
});

export const setTimeOrder = (time) => ({
  type: SET_TIME,
  time,
});

export const setQuantity = (quantity) => ({
  type: SET_QUANTITY,
  quantity,
});

export const confirmOrder = () => ({
  type: CONFIRME_PAYMENT,
});

export const cancelOrder = () => ({
  type: CANCEL_ORDER,
});
