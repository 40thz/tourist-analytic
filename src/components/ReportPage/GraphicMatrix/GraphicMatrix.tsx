import { IGraphic } from '@components/PoolResults/types'
import React from 'react'
import {
	Scatter,
	ScatterChart,
	ResponsiveContainer,
	YAxis,
	XAxis,
	CartesianGrid,
	Tooltip,
} from 'recharts'
import CustomTooltip from './Tooltip'

const GraphicMatrix = ({
	data,
}: {
	data: { name: string; count: number; count2: number }[]
}) => {
	const formatData = data?.map(item => {
		return {
			...item,
			count: item.count.toFixed(3),
			count2: item.count2.toFixed(3),
		}
	})

	return (
		<ResponsiveContainer width='99%' height={300}>
			<ScatterChart data={formatData}>
				<YAxis
					dataKey='count'
					type='number'
					style={{
						fontSize: '10px',
						fill: '#606C80',
					}}
				/>
				<XAxis
					dataKey='count2'
					type='number'
					style={{
						fontSize: '10px',
						fill: '#606C80',
					}}
				/>
				<Tooltip
					content={<CustomTooltip />}
					wrapperStyle={{ outline: 'none' }}
					allowEscapeViewBox={{ y: true }}
				/>
				{/* <CartesianGrid enableBackground={''} /> */}
				<Scatter
					strokeWidth={3}
					dataKey='count'
					stroke='black'
					fill='rgba(0, 0, 0, 0)'
					isAnimationActive={false}
				/>
			</ScatterChart>
		</ResponsiveContainer>
	)
}

export default GraphicMatrix
