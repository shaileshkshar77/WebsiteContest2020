import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function PostTemplate(props) {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="button" gutterBottom>
        {props.author} · {props.date}
      </Typography>
      <Typography variant="body1">
        {props.content}
      </Typography>
    </Container>
  );
}
