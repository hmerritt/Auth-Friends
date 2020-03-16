import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

export default function Login(props) {

    const [credentials, setCredentials] = useState({
        username: "Lambda School",
        password: "i<3Lambd4"
    });

    const handleChange = e => {
        e.preventDefault();
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const login = e => {
        e.preventDefault();

        //  Login user
        axios
            .post("http://localhost:5000/api/login", credentials)
            .then(res => {
                console.log(`[Login] Logging in;`, res.data);

                //  Add token to local-storage
                localStorage.setItem("token", res.data.payload);

                //  Change URL to /friends
                props.history.push("/friends");
            })
            .catch(err => {
                console.log(`[Login] Error logging in;`, err);
            });
    };

    const styles = makeStyles(theme => ({
        title: {
            marginBottom: "25px"
        }
    }))();

    return (
        <div className="login">
            <Typography variant="h2" component="h1" className={styles.title}>
                Login
            </Typography>
            <form onSubmit={login}>
                <TextField
                    type="text"
                    name="username"
                    label="username"
                    variant="outlined"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <TextField
                    type="password"
                    name="password"
                    label="password"
                    variant="outlined"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" size="large" color="primary">Log in</Button>
            </form>
        </div>
    );
}
