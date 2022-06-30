import { firstRegister, completeRegister } from "./actions";

const registerThunk = (dataUser, status, history) => (dispatch) => {
  if (status === "first") {
    dispatch(firstRegister(dataUser));
  } else if (status === "complete") {
    console.log(dataUser);
    dispatch(completeRegister(dataUser));
    history.push("/signin");
  }
};

export default registerThunk;
