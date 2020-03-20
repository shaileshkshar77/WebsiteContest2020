import Link from 'next/link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const blogItems = [
  {
    title: "A Quick At-Home Bodyweight Workout With Burpees",
    author: "Anthony J. Yeung",
    date: "March 19, 2020",
    content: "We’ve got good news: Even if you just can’t get to the gym, you can still get in a great workout at home without any fancy equipment. The next time you want to get a quick workout at home, try one of these quick bodyweight workouts to help you build muscle, slash fat and get great cardio in your own living room."
  },
  {
    title: "A Quick At-Home Bodyweight Workout With Burpees",
    author: "Anthony J. Yeung",
    date: "March 19, 2020",
    content: "We’ve got good news: Even if you just can’t get to the gym, you can still get in a great workout at home without any fancy equipment. The next time you want to get a quick workout at home, try one of these quick bodyweight workouts to help you build muscle, slash fat and get great cardio in your own living room."
  },
  {
    title: "A Quick At-Home Bodyweight Workout With Burpees",
    author: "Anthony J. Yeung",
    date: "March 19, 2020",
    content: "We’ve got good news: Even if you just can’t get to the gym, you can still get in a great workout at home without any fancy equipment. The next time you want to get a quick workout at home, try one of these quick bodyweight workouts to help you build muscle, slash fat and get great cardio in your own living room."
  },
  {
    title: "A Quick At-Home Bodyweight Workout With Burpees",
    author: "Anthony J. Yeung",
    date: "March 19, 2020",
    content: "We’ve got good news: Even if you just can’t get to the gym, you can still get in a great workout at home without any fancy equipment. The next time you want to get a quick workout at home, try one of these quick bodyweight workouts to help you build muscle, slash fat and get great cardio in your own living room."
  },
]

function BlogWelcome() {
  return (
      <Box mb={6}>
        <Typography variant="h3">Blog</Typography>
        <Typography variant="h6">Fitness first. Stay on top with some of our curated posts.</Typography>
      </Box>
  )
}

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

function PostSection(props) {
  const classes = useStyles();
  return(
    <Grid item xs={12} sm={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.date} color="textSecondary" gutterBottom>
            {props.date}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography className={classes.author} color="textSecondary">
            {props.author}
          </Typography>
          <Typography variant="body2" component="p">
            {props.summary}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default function BlogRoll() {
  return (
    <React.Fragment>
      <BlogWelcome />
      <Grid container spacing={3}>
      {blogItems.map(item => 
          <PostSection 
          date={item.date} 
          title={item.title} 
          author={item.author} 
          summary={item.content.substring(0, 80) + "..."}/>
      )}
        </Grid>
      </React.Fragment>
  )
}
