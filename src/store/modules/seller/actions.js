import { SELECT_SELLER, CLEAR_SELLER } from "./actionType";

export const selectSeller = (dataSeller) => ({
  type: SELECT_SELLER,
  dataSeller,
});

export const clearSeller = () => ({
  type: CLEAR_SELLER,
});
