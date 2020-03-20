import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3">
        Enter Email
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Email" />
      </form>
      <Button variant="contained">Register</Button>
    </div>
  )
}
