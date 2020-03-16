import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
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
            })
    };

    const styles = makeStyles(theme => ({
        title: {
            marginBottom: "25px"
        },
    }))();

    return (
        <div className="login">
            <Typography variant="h2" component="h1" className={styles.title}>Login</Typography>
            <form onSubmit={login}>
                <input type="text" name="username" placeholder="username" value={credentials.username} onChange={handleChange} />
                <input type="password" name="password" placeholder="password" value={credentials.password} onChange={handleChange} />
                <button>Log in</button>
            </form>
        </div>
    );
}
