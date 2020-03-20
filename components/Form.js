import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h3">
        Register
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField id="outlined-basic" label="Name" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField id="outlined-basic" label="Surname" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField id="outlined-basic" label="Email" />
          </Grid>
        </Grid>
      </form>
      <Box m={4}>
        <Button variant="outlined">Register</Button>
    </Box>
    </Container>
  )
}
