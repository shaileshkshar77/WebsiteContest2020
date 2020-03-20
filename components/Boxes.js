import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Items = [
  {
    title: "PARTY BRO",
    date: "March 19, 2020",
  },
  {
    title: "SUPER PARTY BRO",
    date: "March 19, 2020",
  },
  {
    title: "EPIC PARTY BRO",
    date: "March 19, 2020",
  },
  {
    title: "SIKE PARTY BRO",
    date: "March 19, 2020",
  },
]


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

export default function BOX() {
  const classes = useStyles();
  return(
    <Grid container spacing={6}>
      {Items.map(item =>(
      <Grid item xs={6} sm={3}>
      <Card className={classes.root}>
      <CardMedia
          className={classes.media}
          image="/static/EDM.jpg"
          title="EDM"
        />
        <CardContent>
          <Typography className={classes.date} color="textSecondary" gutterBottom>
            {item.date}
          </Typography>
          <Typography variant="h5" component="h2">
            {item.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="https://google.com">CLICK</Button>
        </CardActions>
      </Card>
    </Grid>
      ))}
      </Grid>
  )
}
