import { ThemeConfig } from 'react-select'

export const theme: ThemeConfig = theme => ({
	...theme,
	colors: {
		...theme.colors,
		text: 'red',
		primary: '#439aea',
		primary25: '#F7F8FA',
		primary50: '#F7F8FA',
		danger: '#439aea',
		dangerLight: '#F7F8FA',
	},
})
