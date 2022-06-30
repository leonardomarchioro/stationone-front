import Home from "../Pages/Home";
import SignUp from "../Pages/SingnUp";
import SignIn from "../Pages/SingIn";
import Dashboard from "../Pages/Dashboard";

import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
