import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Link from 'next/link';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import exerciseData from './ExerciseData';

function ExerciseWelcome() {
  return (
      <Box mb={6}>
        <Typography variant="h3">Exercises</Typography>
        <Typography variant="h6">Get fit today! Select from a range of community contributed exerscise training sets</Typography>
      </Box>
  )
}

export function ExerciseCard(props) {
  return(
    <Card>
      <CardActionArea>
        <CardMedia
        component="img"
        height="140"
        image={props.image}
        title="Meditation"
      />
        </CardActionArea>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            {props.author} · {props.time}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/exercise?title=${props.title}&date=${props.time}&author=${props.author}&technique=${props.technique}&benefits=${props.benefits}&date=${props.date}`}>
            <Button size="small">
              Train Now
            </Button>
          </Link>
        </CardActions>
      </Card>
  )
}

export default function Exercise() {
  return (
    <div>
    <ExerciseWelcome />
      <Grid container spacing={3}>
        {exerciseData.map((tile, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <ExerciseCard
            image={tile.image}
            title={tile.title}
            author={tile.author}
            date={tile.date}
            time={tile.time}
            technique={tile.technique}
            benefits={tile.benefits}
          />
          </Grid>
        ))}
      </Grid>
</div>
  );
}
