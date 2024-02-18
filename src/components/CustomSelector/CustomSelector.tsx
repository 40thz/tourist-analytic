import React from 'react'
import Select from 'react-select'

import { DropdownIcon } from './DropdownIcon'
import { colourStyles } from './styles'
import { theme } from './theme'

import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager'

export interface IOptionSelect {
	id: number | any
	name: string
}

interface ISelectProps extends StateManagerProps<IOptionSelect> {
	refFunc?: any
	onChange: (newValue: any) => void
}

class CustomSelector extends React.Component<ISelectProps> {
	render(): React.ReactNode {
		return (
			<Select
				getOptionLabel={option => option.name}
				getOptionValue={option => option.id}
				menuPlacement='auto'
				className='react-select-container'
				classNamePrefix='react-select'
				theme={theme}
				styles={colourStyles}
				ref={ref => this.props.refFunc && this.props.refFunc(ref)}
				placeholder='Выбрать'
				components={{
					IndicatorSeparator: () => null,
					DropdownIndicator: DropdownIcon,
				}}
				{...this.props}
			/>
		)
	}
}

export default CustomSelector
