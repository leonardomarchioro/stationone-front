import { FIRST_REGISTER, COMPLETE_REGISTER } from "./actionsType";

const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case FIRST_REGISTER:
      state = { ...action.dataUser };
      return state;

    case COMPLETE_REGISTER:
      state = {};
      return state;

    default:
      state = {};
      return state;
  }
};

export default registerReducer;
