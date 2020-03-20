import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <img src="./static/github.jpg" height="140"></img>
        </Grid>
        <Grid item xs={6} sm={3}>
          <img src="./static/download.jpg" height="140"></img>
        </Grid>
        <Grid item xs={6} sm={3}>
          <img src="./static/twilio.jpg" height="140"></img>
        </Grid>
        <Grid item xs={6} sm={3}>
          <img src="./static/Herman.jpg" height="140"></img>
        </Grid>
      </Grid>
    </div>
  );
}
