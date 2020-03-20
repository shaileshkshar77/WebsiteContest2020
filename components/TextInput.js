import React from 'react';
class TextInput extends React.Component
{
	render()
	{
		return(<div>
					<label>{this.props.label</label>
					<input type="text" value={this.state.value} placeholder={this.props.placeholder}/>
				</div>
			)
	}
	handleChange(event)
	{
		let inputValue = event.target.value;
		this.setState({value : inputValue});
		this.props.onChange(inputValue);
	}	
	constructor(props)
	{
		super(props);
		this.state={value : ''};
		this.handleChange =this.handleChange.bind(this);
	}	
	weightChanged(weightValue)
	{
		this.setState({weight : weightValue});
	}
	heightChanged(heightValue)
	{
		this.setState({height : heightValue});
	}
}

export default TextInput;	