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
	if (x !== undefined && y !== undefined) {
		if (itsNameBar) {
			return (
				<switch>
					<foreignObject
						x={x + 6}
						y={y + 5}
						dy={30}
						width={props.width}
						height='200'
						fill='#fff'>
						<p style={{ fontSize: '12px', color: '#606C80' }}>
							{props.width < 40 ? (
								<div
									title={value?.toString()}
									style={{
										height: '60px',
										width: props.width,
										transform: 'translateY(-20PX)',
									}}></div>
							) : (
								value
							)}
						</p>
					</foreignObject>
				</switch>
			)
		}
		if (!itsName) {
			return (
				<text
					x={x + 10}
					y={y}
					dy={9}
					fill='#273141'
					fontSize={10}
					style={{ fontWeight: 'bold' }}
					textAnchor='right'>
					{value} %
				</text>
			)
		} else {
			return (
				<text
					x={x + 5}
					y={y}
					dy={-10}
					fill='#273141'
					fontSize={14}
					textAnchor='right'>
					{value}
				</text>
			)
		}
	} else return null
}

export default CustomizedLabel
