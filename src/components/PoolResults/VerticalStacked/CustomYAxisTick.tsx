import React from 'react'

const CustomYAxisTick = (props: any) => {
	const { x, y, payload } = props
	return (
		<g transform={`translate(${0},${y} )`}>
			<text x={0} y={0} textAnchor='start' fill='#666'>
				'123'
			</text>
		</g>
	)
}

export default CustomYAxisTick
