import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ImageAvatars() {
    const classes = useStyles();

    return ( <div className = { classes.root } >
        <Avatar alt = "github"
        src = "github.svg" / >
        <Avatar alt = "herman"
        src = "herman.svg" / >
        <Avatar alt = "scale"
        src = "scale_.svg" / >
        <Avatar alt = "washingtonpost"
        src = "washingtonpost.svg" / >
        <Avatar alt = "twillio"
        src = "twillio.svg" / >
        <Avatar alt = "auth0"
        src = "auth0.svg" / >
        </div>
    );
}
