import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

export default function Friend({ friend, friendDelete }) {
    const styles = makeStyles(theme => ({
        root: {
            marginBottom: "15px"
        }
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
            <CardActions>
                <Button
                    onClick={() => { friendDelete(friend.id) }}
                    size="small"
                    color="secondary"
                    startIcon={<Delete />}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}
