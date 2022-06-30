import Home from "../Pages/Home"
import SignUp from "../Pages/SingnUp"
import SignIn from "../Pages/SingIn"

import { Route, Switch } from "react-router-dom"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/signin" component={SignIn}/>
        </Switch>
    )   
}

export default Routes;