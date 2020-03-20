import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import exerciseData from './ExerciseData';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function PostTemplate(props) {
  const classes = useStyles();
  const technique  = props.technique;
  const benefits = props.benefits;
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="button" gutterBottom>
        {props.author} · {props.date} · {props.time}
      </Typography>
      <Typography variant="h5" fontWeight="fontWeightBold">
        Technique
      </Typography>
      <Typography variant="h5">
        {technique}
      </Typography>
      <Typography variant="h5" fontWeight="fontWeightBold">
        Benefits
      </Typography>
      <Typography variant="h5">
        {benefits}
      </Typography>
    </Container>
  );
}
