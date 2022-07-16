import { loginUser, logOut } from "./actions";
import { toast } from "react-toastify";

const loginThunk = (dataLogin, history) => (dispatch) => {
  const dataUser = JSON.parse(localStorage.getItem("@UserRegister:Data"));
  if (dataLogin) {
    dispatch(loginUser(dataLogin));
    if (!dataUser) {
      toast.error("Wrong email or password");
    } else {
      if (dataLogin.email === dataUser.email) {
        if (dataLogin.password === dataUser.password) {
          toast.success("Login with success!");
          history.push("/dashboard");
        } else {
          toast.error("Wrong email or password");
        }
      } else {
        toast.error("Wrong email or password");
      }
    }
  } else {
    dispatch(logOut());
    localStorage.clear();
    localStorage.setItem("@UserRegister:Data", JSON.stringify(dataUser));
  }
};

export default loginThunk;
