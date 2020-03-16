import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendAdd from "./FriendAdd";
import Friend from "./Friend";

export default function FriendsList() {

    //  Friends
    const [friends, setFriends] = useState([]);

    //  Get all friends from API
    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log("Loaded Friends;", res.data);
                setFriends(res.data);
            });
    }, []);

    const styles = makeStyles(theme => ({
        title: {
            marginBottom: "25px"
        },
        list: {
            marginTop: "40px"
        },
    }))();

    return (
        <div className="friends-list">
            <Typography variant="h2" component="h1" className={styles.title}>Friends</Typography>

            <div className="friend-add">
                <FriendAdd setFriends={setFriends} />
            </div>

            <div className={`list ${styles.list}`}>
                {friends
                    .map((item, key) => {
                        return <Friend friend={item} key={key} />;
                    })
                    .reverse()}
            </div>
        </div>
    );
}
