import React from 'react';

class Button extends React.Component
{
	render()
	{
		return(
		<div onClick={this.props.onClick}>
			{this.props.label}
		</div>)
	}
}

<div className="row">
	<h3>BMI = {this.state.bmi}</h3>
</div>
<div className="row">
	<h3>{this.state.bmiClass}</h3>
</div>	

export default Button;