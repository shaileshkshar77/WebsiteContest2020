import React from "react";
import { colors } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles({
  footerBg: {
    background: 'black',
  },
  footerHeading: {
    color: grey[50],
    fontWeight: "fontWeightBold",
    fontSize: 16,
  },
  footerLink: {
    color: grey[600],
  },
});

export default function Footer() {
  const classes = useStyles();
  const companyLinks = [
    {
      name: "Home",
      href: ""
    },
    {
      name: "Join",
      href: ""
    },
    {
      name: "About",
      href: ""
    },
    {
      name: "Blog",
      href: ""
    },
    {
      name: "Train",
      href: ""
    },
  ];
  return (
    <Box mt={12} p={5} className={classes.footerBg}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" >
              <Box className={classes.footerHeading}>
                Student Club
              </Box>
            </Typography>
            {companyLinks.map((ln, idx) => 
              <Typography variant="h6" key={idx} className={classes.footerLink}>
                {ln.name}
              </Typography>
            )}
            </Grid>
          </Grid>
        </Container>
      </Box>
      )
}
