import { StylesConfig } from 'react-select'
import { IOptionSelect } from './CustomSelector'

type IsMulti = boolean

export const colourStyles: StylesConfig<IOptionSelect, IsMulti> = {
	control: (provided, state) => ({
		...provided,
		backgroundColor: '#F7F8FA',
		borderRadius: '12px',
		border: state.isFocused ? '1px solid #DFE2E9' : '1px solid #DFE2E9',
		'&:hover': { borderColor: 'hsl(0, 0%, 70%)' },
		boxShadow: 'none',
		minHeight: '50px',
		fontSize: '14px',
	}),

	singleValue: provided => ({
		...provided,
		color: '#606C80',
		fontSize: '14px',
	}),
	multiValue: provided => ({
		...provided,
		borderRadius: 12,
		backgroundColor: '#F7F8FA',
		boxShadow: '-1px 5px 11px 1px rgba(34, 60, 80, 0.2)',
		textTransform: 'capitalize',
		paddingBottom: 5,
		paddingTop: 5,
		marginBottom: 10,
	}),

	menuList: provided => ({
		...provided,
		backgroundColor: '#fff',
		paddingBottom: 0,
		paddingTop: 0,
		fontSize: '14px',
		overflowX: 'hidden',
		textTransform: 'capitalize',
		'::-webkit-scrollbar': {
			width: '5px',
		},
		'::-webkit-scrollbar-track': {
			background: '#f1f1f1',
		},
		'::-webkit-scrollbar-thumb': {
			background: '#bbb',
		},
		'::-webkit-scrollbar-thumb:hover': {
			background: '#ccc',
		},
	}),
	option: (provided, state) => ({
		...provided,
		color: state.isSelected ? '#fff' : '#606C80',
		padding: '12px 20px',
	}),
}
