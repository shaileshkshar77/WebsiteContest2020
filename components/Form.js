import React from 'react';
import TextInput from './TextInput.js'
import Form from '../styles/Form.css'

class Form extends React.Component
{
	render(){
		return(<div>
		<div classname="row">
			<TextInput label="Height" placeholders="Enter height in meters" onChange={this.heightChange} />
		</div> 
		<div classname="row">
			<TextInput label="Weight" placeholders="Enter weight in kg" onChange={this.weightChange} />
		</div>
		<div className="row">
			<Button label="SUBMIT" onClick= {this.computeBmi}/>
		</div)
	}
	
	computeBmi()
	{
		let bmiValue= (this.state.weight / this.state.height)/this.state.height;
		this.setState=({bmi : bmiValue});
		let bmiClass = this.getBmi(bmiValue);
		this.setState({bmiClass : bmiClass});
	}	
	getBmi(bmi)
	{
		if(bmi < 18.5)
		{ return "Underweight"; }
		if(bmi >= 18.5 && bmi <= 24.9)
		{ return "Normal Weight"; }
		if(bmi > 24.9 && bmi <= 29.9 )
		{ return "Overweight"; }
		if(bmi>=30)
		{ return "Obesity";}
	}	
}	

export default Form;