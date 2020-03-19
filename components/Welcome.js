import Link from 'next/link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  subheading: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

function MottoBox() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h1">
        Eat right. Be bright.
      </Typography>
      <Typography variant="h6" className={classes.subheading}>
        Eat Peppers is a world renowned health and fitness club. Be a part of the fitness movement today.
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button variant="outlined" fullWidth="true">
            Learn More
          </Button>
        </Grid>
        <Grid item xs>
          <Button variant="contained" color="primary" fullWidth="true">
            Register
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

function Images() {
  return (
    <Grid item xs>
      <IconButton fullWidth="true">
        <FavoriteTwoToneIcon />
      </IconButton>
    </Grid>
  )
}

export default function Welcome() {
  const classes = useStyles();
  return (
    <Box my={12}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <MottoBox />
          <Images />
        </Grid>
      </div>
    </Box>
  )
}
