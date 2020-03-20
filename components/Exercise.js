import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 300,
    height: 350,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const tileData = [
  {
    title: "Meditation",
    author: "Shaibro",
    date: "March 19, 2020",
  },
  {
    title: "Meditation",
    author: "Shaibro",
    date: "March 19, 2020",
  },
  {
    title: "Meditation",
    author: "Shaibro",
    date: "March 19, 2020",
  },
  {
    title: "Meditation",
    author: "Shaibro",
    date: "March 19, 2020",
  },
  {
    title: "Meditation",
    author: "Shaibro",
    date: "March 19, 2020",
  },
  {
    title: "Meditation",
    author: "Shaibro",
    date: "March 19, 2020",
  },
]

export default function E() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">Excercises</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src="/static/meditation.jpg" alt={tile.title} height="350" width="300"/>
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>

        ))}
      </GridList>
    </div>
  );
}
