import { LOGIN_USER, LOG_OUT } from "./actionsType";

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = action.dataLogin;
      return state;

    case LOG_OUT:
      state = {};
      return state;

    default:
      state = {};
      return state;
  }
};

export default loginReducer;
