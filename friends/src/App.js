import React, { Component } from "react";
import "./App.css";
import { Route, Link, withRouter } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";
import Auth from "./components/AuthService";
import SignOutButton from "./components/SignOutButton";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="main">
                <SignOutButton />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route
                    exact
                    path="/loginaftersignup"
                    render={props => <Login register={true} />}
                />
            </div>
        );
    }
}

export default withRouter(App);
