import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        About
      </Typography>
      <Typography variant="h6" gutterBottom>
      Hello my dear visitors . Welcome to the health website . This was made by good humans from the group ieeecoders. 
      We are kool kids from CSE A section who care about ppl. we dont want people to eat alot and get diabeties 
      as we are in Quarantine. This ebsite gives u steps and tricks to maintain your health through exercise and meditaion.
      tnx.
      </Typography>
      
    </div>
  )
}
