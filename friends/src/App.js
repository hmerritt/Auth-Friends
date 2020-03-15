import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login/Login";
import FriendsList from "./components/FriendsList";
import "./App.css";

function App() {
    return (
        <div className="App">


            {/* Routes */}
            <Switch>
                <PrivateRoute component={FriendsList} />
                <Route path="/login" component={Login} />
                <Route component={Login} />
            </Switch>
        </div>
    );
}

export default App;
