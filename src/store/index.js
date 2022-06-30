import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import registerReducer from "./modules/register/reducer";
import loginReducer from "./modules/login/reducer";

const reducers = combineReducers({
  registerUser: registerReducer,
  loginUser: loginReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
