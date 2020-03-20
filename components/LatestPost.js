import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { blogItems } from './BlogRoll';

const useStyles = makeStyles({
  date: {
    fontSize: 14,
  },
  author: {
    marginBottom: 12,
  },
  content: {
    marginBottom: 24,
  }
});

export default function LatestPost() {
  const latestPost = blogItems[0];
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={9} md={9}>
        <Typography variant="button">
          Fresh Post
        </Typography>
        <Typography variant="h3">
          {latestPost.title}
        </Typography>
        <Typography variant="h6" className={classes.author}>
          {latestPost.author} · {latestPost.date}
        </Typography>
        <Typography variant="h5" className={classes.content}>
          {latestPost.content.substring(0, 400) + " ..."}
        </Typography>
        <Button size="small" endIcon={ <NavigateNextIcon /> }>
          Read More
        </Button>
      </Grid>
    </Grid>
  )
}
