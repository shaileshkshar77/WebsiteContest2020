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
        Meditation
      </Typography>
      <Typography variant="body1" gutterBottom>
        by Shaibro - 20/04/2020
      </Typography>
      <Typography variant="h4" gutterBottom>
        Technique
      </Typography>
      <Typography variant="body1" gutterBottom>
      Sit or lie comfortably and close your eyes. 
      Make no effort to control the breath and simply breathe naturally.
      Focus your attention on the breath and on how the body moves with each inhalation and exhalation. 
      Notice the movement of your body as you breathe. Observe your chest, belly etc..
      Simply focus your attention on your breath without controlling its pace or intensity. If your mind wanders,
      return your focus back to your breath.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Benefits
      </Typography>
      <Typography variant="body1" gutterBottom>
      Lower blood pressure
      Improved blood circulation
      Lower heart rate
      Less perspiration
      Slower respiratory rate
      Less anxiety and stress due to lowered levels of cortisol
      Deeper relaxation
      </Typography>
      
      
    </div>
  );
}
