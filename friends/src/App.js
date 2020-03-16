import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Container>

                {/* Routes */}
                <Switch>
                    <PrivateRoute exact path="/friends" component={FriendsList} />
                    <Route path="/login" component={Login} />
                    <Route component={Login} />
                </Switch>

            </Container>
        </div>
    );
}

export default App;
