import React, { useState, useEffect } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function FriendAdd({ setFriends }) {

    const [friend, setFriend] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChange = e => {
        e.preventDefault();
        setFriend({ ...friend, [e.target.name]: e.target.value });
    };

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/friends", friend)
            .then(res => {
                console.log("Added Friend;", res.data);
                setFriends(res.data);
            });
        setFriend({
            name: "",
            age: "",
            email: ""
        });
    }

    return (
        <form onSubmit={addFriend}>
            <TextField
                type="text"
                name="name"
                label="Name"
                variant="outlined"
                onChange={handleChange}
                value={friend.name}
                required
            />
            <TextField
                type="text"
                name="age"
                label="Age"
                variant="outlined"
                onChange={handleChange}
                value={friend.age}
                required
            />
            <TextField
                type="text"
                name="email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
                value={friend.email}
                required
            />
            <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
            >
                Add Friend
            </Button>
        </form>
    );
}
