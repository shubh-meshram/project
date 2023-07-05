import { Link, Route, Switch } from "react-router-dom";
// import {Route} from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import DashboardAdmin from "./DashboardAdmin";
import DashboardVendor from "./DashboardVendor";

import ManageVendor from "./ManageVendor";
import DashboardCustomer from "./DashboardCustomer";
import Contact from "./Contact";
import About from "./About";
import NotFound from "./NotFound";
import { useState } from "react";
import ProtectedRoute from './ProtectedRoute';
import Profile from "./Profile";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import OrderNow from "./OrderNow"
import Register from "./Register";

function Launch2() {

var [username,setUsername]=useState("!!!!")
const history=useHistory();
debugger
console.log("inside launch2.js")
    return (<>
        <Header> </Header>
         
        <hr></hr>
        
        <Switch>
            <Route path="/db" exact setUsername={setUsername} component={DashboardCustomer} ></Route>
            <Route path="/admin" exact setUsername={setUsername} component={DashboardAdmin} ></Route>
            <Route path="/vendor" exact setUsername={setUsername} component={DashboardVendor} ></Route>

            <Route path="/managevendor" exact setUsername={setUsername}  component={ManageVendor} />
            <Route path="/contact" exact setUsername={setUsername}  component={Contact} />
            <Route path="/register" exact setUsername={setUsername}  component={Register} />

            <Route path="/signin" exact setUsername={setUsername}  component={Login} />
            <Route path="/ordernow" exact setUsername={setUsername} component={OrderNow} />
            <Route path="/about" exact setUsername={setUsername} component={About} />
            <ProtectedRoute path="/profile" setUsername={setUsername} exact  component={Profile} />
            <Route path="/" setUsername={setUsername} exact component={DashboardCustomer} />
            <Route path="*" exact setUsername={setUsername} component={NotFound} />
        </Switch>
        <hr></hr>
        
        <br></br>
        <Footer></Footer>
    </>)
    
}

export default Launch2;
