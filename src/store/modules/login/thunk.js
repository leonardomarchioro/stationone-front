import { loginUser, logOut } from "./actions";

const loginThunk = (dataLogin, history) => (dispatch) => {
  if (dataLogin) {
    console.log(dataLogin);
    dispatch(loginUser(dataLogin));
    history.push("/dashboard");
  } else {
    dispatch(logOut());
    history.push("/");
  }
};

export default loginThunk;
