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
  primaryBigButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    padding: '15px 0px',
    borderRadius: 4,
  },
  secondaryBigButton: {
    background: 'white',
    padding: '15px 0px',
    borderRadius: 4,
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
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Button size="large" variant="contained" fullWidth={true} className={classes.secondaryBigButton} href="about">
            Learn More
          </Button>
        </Grid>
        <Grid item xs>
          <Button size="large" variant="contained" color="primary" fullWidth={true} className={classes.primaryBigButton}>
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
      <IconButton>
        <FavoriteTwoToneIcon />
      </IconButton>
    </Grid>
  )
}

export default function Welcome() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <MottoBox />
      <Images />
    </Grid>
  )
}
