import Link from 'next/link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SpeedIcon from '@material-ui/icons/Speed';

const useStyles = makeStyles({
  hueFilter : {
    filter: 'hue-rotate(0)'
  },
  bmiValue: {
    fontSize: 234,
  },
  niceSlider: {
    color: '#FF8E53',
  },
  thumbIndicator: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  weightIcon: {
    fontSize: 144,
  },
  subHeading: {
    fontSize: 24,
    marginBottom: 35,
  }
});

var z =18.5

export function BmiForm() {
  const classes = useStyles();
  const [height, setHeight] = React.useState(170);
  const [weight, setWeight] = React.useState(25);

  const handleHeightChange = (event, newValue) => {
    setHeight(newValue);
  }

  const heightMarks = [
    {
    value: 90,
    label: '90cm',
    },
    {
      value: 210,
      label: '210cm',
    }
  ]

  const weightMarks = [
    {
    value: 15,
    label: '15kg',
    },
    {
      value: 150,
      label: '150kg',
    }
  ]

  const handleWeightChange = (event, newValue) => {
    setWeight(newValue);
  }
  
  function valueHeight(value) {
    return `${value} cm`;
  }
  function valueWeight(value) {
    return `${value} kg`;
  }
  function getBmi(bmi) {
    if(bmi < 18.5) {
        return "You are Underweight. You may be suffering from malnutrition, or maybe an eating disorder.";
    }
    if(bmi >= 18.5 && bmi < 24.9) {
        return "You are Normal weight. Congratulations on being healthy!";
    }
    if(bmi >= 25 && bmi < 29.9) {
        return "You are Overweight. You are on the brink of being obese. Consider exercising regularly!";
    }
    if(bmi >= 30) {
        return "You are morbidly Obese. Consider visiting a dietrician.";
    }
}

  return (
    <React.Fragment>
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4">
          Height
        </Typography>
        <Slider
        className={classes.niceSlider}
        value={height}
        min={90}
        max={210}
        marks={heightMarks}
        onChange={handleHeightChange}
        valueLabelDisplay="auto"
        getAriaValueText={valueHeight}
        aria-labelledby="discrete-slider-always"
      />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">
            Weight
          </Typography>
          <Slider
          value={weight}
          className={classes.niceSlider}
          min={15}
          max={150}
          marks={weightMarks}
          onChange={handleWeightChange}
          valueLabelDisplay="auto"
          getAriaValueText={valueWeight}
          aria-labelledby="discrete-slider-always"
        />
        </Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h1" className={classes.bmiValue}>
        {(weight / (height * height * 0.0001)).toFixed(2)}
        </Typography>
        <Typography variant="h4">
          kg/m²
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h3">
          {getBmi((weight / (height * height * 0.0001)).toFixed(2))}
        </Typography>
      </Grid>
    </Grid>
  </React.Fragment>
  )
}

export function BmiWelcome() {
  return (
      <Box mb={6}>
        <Typography variant="h3">Start Today</Typography>
        <Typography variant="h6">About to embark on the fitness journey? Calculate your BMI and set your goals.</Typography>
      </Box>
  )
}

export function BmiIndexWidget() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} justify="flex-start" alignItems="flex-start">
      <Grid item xs={12} sm={9} md={9}>
        <Typography variant="button">
          Bmi calculator
        </Typography>
        <Typography variant="h2">
          Don't know where to start? 
        </Typography>
        <Typography variant="h6" className={classes.subHeading}>
          Find where you stand with a BMI test.
        </Typography>
        <Button variant="outlined" size="large" endIcon={ <NavigateNextIcon /> } href="/bmi">
          Calculate Now
        </Button>
      </Grid>
    </Grid>
  )
}

export default function BmiWidget() {
  return (
    <React.Fragment>
      <BmiWelcome />
      <BmiForm />
    </React.Fragment>
  )
};
