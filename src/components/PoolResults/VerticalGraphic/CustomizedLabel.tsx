import React from 'react'
import { LabelProps } from 'recharts'

const CustomizedLabel = ({ x, y, width, value, name }: any) => {
	return (
		<g>
			<text
				x={x + width + 15}
				y={value < 0.1 ? y - 15 : y}
				fill='#273141'
				fontSize='10px'
				textAnchor='middle'
				dy={10}>{`${value} %`}</text>
			{/* <text
				x={x + width / 2}
				y={value < 0.1 ? y : width * 15}
				fill='#273141'
				fontSize='12px'
				textAnchor='middle'
				dy={value < 0.1 ? -50 : -10}>
				{name}
			</text> */}
		</g>
	)
}

export default CustomizedLabel
