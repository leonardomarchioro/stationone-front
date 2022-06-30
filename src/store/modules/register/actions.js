import { FIRST_REGISTER, COMPLETE_REGISTER } from "./actionsType";

export const firstRegister = (dataUser) => ({
  type: FIRST_REGISTER,
  dataUser,
});

export const completeRegister = (dataUser) => ({
  type: COMPLETE_REGISTER,
  dataUser,
});
