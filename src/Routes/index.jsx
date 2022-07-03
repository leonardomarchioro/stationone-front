import Home from "../Pages/Home";
import SignUp from "../Pages/SingnUp";
import SignIn from "../Pages/SingIn";
import Dashboard from "../Pages/Dashboard";
import SellerPage from "../Pages/SellerPage";

import { Route, Switch } from "react-router-dom";
import Payment from "../Pages/Payment";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/seller" component={SellerPage} />
    </Switch>
  );
};

export default Routes;
