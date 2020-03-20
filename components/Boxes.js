import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {exerciseData, ExerciseCard} from './Exercise';
import blueGrey from '@material-ui/core/colors/blueGrey' ;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  date: {
    fontSize: 14,
  },
  author: {
    marginBottom: 12,
  },
});

const showMore = makeStyles({
  bgGradient: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    height: '100%',
  },
  heading: {
    color: 'white',
  },
  subheading: {
    color: 'white',
    marginBottom: 35,
  },
  viewAll: {
    color: 'white',
  }
});

export default function Box() {
  const classes = showMore();
  return(
    <Grid
    container
    spacing={3} 
    alignItems="stretch"
    direction="row"
    justify="space-between"
  >
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.bgGradient}>
          <CardContent>
            <Typography variant="h3" className={classes.heading}>
              Training Sets
            </Typography>
            <Typography variant="h6" className={classes.subheading}>
              Popular this Month
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" endIcon={ <NavigateNextIcon /> } className={classes.viewAll}>
              View All
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {exerciseData.slice(0, 3).map((tile, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <ExerciseCard
          image={tile.image}
          title={tile.title}
          author={tile.author}
          time={tile.time}
        />
          </Grid>
      ))
      }
        </Grid>
  )
}
