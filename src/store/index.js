import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import registerReducer from "./modules/register/reducer";
import loginReducer from "./modules/login/reducer";
import paymentReducer from "./modules/payment/reducer";
import sellerReducer from "./modules/seller/recucer";

const reducers = combineReducers({
  registerUser: registerReducer,
  loginUser: loginReducer,
  payment: paymentReducer,
  seller: sellerReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
