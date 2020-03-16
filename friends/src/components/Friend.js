import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export default function Friend({ friend }) {

    const styles = makeStyles(theme => ({
        root: {
            marginBottom: "15px"
        },
    }))();

    return (
        <Card className={styles.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {friend.name}
                </Typography>
                <Typography color="textSecondary">
                    {friend.age} years old
                </Typography>
                <Typography variant="body2" component="p">
                    {friend.email}
                </Typography>
            </CardContent>
        </Card>
    );
}
