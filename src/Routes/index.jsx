import Home from "../Pages/Home"
import SingUp from "../Pages/SingnUp"
import SignIn from "../Pages/SingIn"

import { Route, Switch } from "react-router-dom"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/singup" component={SingUp}/>
            <Route exact path="/singin" component={SignIn}/>
        </Switch>
    )
}

export default Routes;