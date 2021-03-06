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
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import blogItems from './BlogData';

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
    <Grid item xs={12} sm={6} md={6}>
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
          <Link href={`/blog_post?title=${props.title}&date=${props.date}&author=${props.author}&content=${props.content}`}>
            <Button size="small" endIcon={ <NavigateNextIcon /> }>Read More</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default function BlogRoll() {
  return (
    <React.Fragment>
      <BlogWelcome />
      <Grid container spacing={3} alignItems="stretch">
      {blogItems.map(item => 
          <PostSection 
          key={item.id}
          date={item.date} 
          title={item.title} 
          author={item.author} 
          content={item.content}
          summary={item.content.substring(0, 120) + "..."}/>
      )}
        </Grid>
      </React.Fragment>
  )
}
