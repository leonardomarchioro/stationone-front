import { LOGIN_USER, LOG_OUT } from "./actionsType";

export const loginUser = (dataLogin) => ({
  type: LOGIN_USER,
  dataLogin,
});

export const logOut = (dataLogin) => ({
  type: LOG_OUT,
});
