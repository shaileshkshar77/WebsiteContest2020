import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import CssBaseline from '@material-ui/core/CssBaseline';
import GitHubIcon from '@material-ui/icons/GitHub';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  github: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            eat.peppe.rs
          </Typography>
          <IconButton color="inherit" className={classes.github} aria-label="github icon">
              <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

