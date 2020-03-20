import Link from 'next/link';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

// class Form extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       bmi: 0.0,
//       bmiClass: "Underweight",
//     }
//   }
// 
//   function computeBmi() {
//     let bmiValue= this.state.weight / (this.state.height * this.state.height);
//     this.setState=({bmi : bmiValue});
// 
//     let bmiClass = this.getBmi(bmiValue);
//     this.setState({bmiClass : bmiClass});
//   }
// 
//   function getBmi(bmi) {
//     if(bmi < 18.5) {
//       return "Underweight"; 
//     } if(bmi >= 18.5 && bmi <= 24.9) {
//       return "Normal Weight"; 
//     } if(bmi > 24.9 && bmi <= 29.9 ) {
//       return "Overweight"; 
//     } if(bmi>=30) { 
//       return "Obesity";
//     }
//   }	
// 
//   render() {
//     <React.Fragment>
//       <Typography variant="h4">
//         Height
//       </Typography>
//       <Slider
//         defaultValue={60}
//         getAriaValueText={valuetext}
//         aria-labelledby="discrete-slider-always"
//         step={10}
//         marks={marks}
//         valueLabelDisplay="on"
//       />
//     </React.Fragment>
//   }
// }	

var z =18.5

function BmiForm() {
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
        return "Underweight";
    }
    if(bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    }
    if(bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    }
    if(bmi >= 30) {
        return "Obesity";
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
        <Typography variant="h1">
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

function BmiWelcome() {
  return (
      <Box mb={6}>
        <Typography variant="h3">Start Today</Typography>
        <Typography variant="h6">About to embark on the fitness journey? Calculate your BMI and set your goals.</Typography>
      </Box>
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
