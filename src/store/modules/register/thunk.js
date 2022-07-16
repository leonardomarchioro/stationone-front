import { toast } from "react-toastify";
import { firstRegister, completeRegister } from "./actions";

const registerThunk = (dataUser, status, history) => (dispatch) => {
  if (status === "first") {
    dispatch(firstRegister(dataUser));
  } else if (status === "complete") {
    toast.success("Register with success!");
    dispatch(completeRegister(dataUser));
    localStorage.setItem("@UserRegister:Data", JSON.stringify(dataUser));
    history.push("/signin");
  } else if (status === "update") {
    dispatch(completeRegister(dataUser));
    localStorage.setItem("@UserRegister:Data", JSON.stringify(dataUser));
  }
};

export default registerThunk;
