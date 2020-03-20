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

export default function LatestPost() {
  const latestPost = blogItems[0];
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={9} md={9}>
        <Typography variant="h3" color="textSecondary">
          {latestPost.date}
        </Typography>
        <Typography variant="h2">
          {latestPost.title}
        </Typography>
        <Typography variant="h4">
          By {latestPost.author}
        </Typography>
        <Typography variant="h5">
          {latestPost.content.substring(0, 150) + " ..."}
        </Typography>
        <Button size="small" endIcon={ <NavigateNextIcon /> }>
          Read More
        </Button>
      </Grid>
    </Grid>
  )
}
