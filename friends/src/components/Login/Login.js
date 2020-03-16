import React, { useState } from "react";
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
                localStorage.setItem("token", res.data.payload);
                props.history.push("/friends");
            })
            .catch(err => {
                console.log(`[Login] Error logging in;`, err);
            })
    };

    return (
        <div className="login">
            <form onSubmit={login}>
                <input type="text" name="username" placeholder="username" value={credentials.username} onChange={handleChange} />
                <input type="password" name="password" placeholder="password" value={credentials.password} onChange={handleChange} />
                <button>Log in</button>
            </form>
        </div>
    );
}
