import React from 'react'
import { LabelProps } from 'recharts'

interface ICustomLabel extends LabelProps {
	x?: number
	y?: number
	itsName?: boolean
	itsNameBar?: boolean
	index?: number | any
	width?: any
}
const CustomizedLabel = ({
	value,
	x,
	y,
	name,
	index,
	itsName = false,
	itsNameBar = false,

	...props
}: ICustomLabel) => {
	if (x !== undefined) {
		return (
			<text
				x={x + 10}
				y={y}
				dy={10}
				fill='#273141'
				fontSize={10}
				fontWeight='bold'>
				{value} %
			</text>
		)
	} else return null
}

export default CustomizedLabel
