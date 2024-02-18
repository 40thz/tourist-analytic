import React from 'react'

const CustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	value,
	...props
}: any) => {
	const RADIAN = Math.PI / 180
	const radius = innerRadius + (outerRadius - innerRadius) * 0.4
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text
			x={x}
			y={y}
			fill='white'
			fontSize={12}
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline='central'>
			{percent * 100 < 10 ? '' : ` ${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

export default CustomizedLabel
