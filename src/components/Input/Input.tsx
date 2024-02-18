import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name?: string
	label?: string
}

class Input extends React.Component<InputProps> {
	render(): React.ReactNode {
		return (
			<div className='input__container'>
				<label htmlFor={this.props.name}>{this.props.label}</label>
				<input className='input' id={this.props.name} {...this.props} />
			</div>
		)
	}
}

export default Input
