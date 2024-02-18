import { toPercent } from '@utils/toPercent'
import React from 'react'
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	TooltipProps,
	XAxis,
	YAxis,
} from 'recharts'
import { NameType } from 'recharts/types/component/DefaultTooltipContent'
import { IGraphic } from '../types'
import CustomizedLabel from './CustomizedLabel'

const VerticalGraphic = ({ data }: { data: IGraphic[] }) => {
	const CustomTooltip = ({
		payload,
		label,
		...props
	}: TooltipProps<any, NameType>) => {
		if (payload != undefined) {
			return (
				<div className='custom-tooltip'>
					<div className='custom-tooltip-title'>
						{payload[0]?.payload.name} - {payload[0]?.payload.count1} %
					</div>
				</div>
			)
		} else {
			return null
		}
	}

	const formatData = data?.map(item => {
		return {
			...item,
			count1: toPercent(item.count1),
		}
	})
	return (
		<ResponsiveContainer width='90%' height={200}>
			<BarChart data={formatData}>
				<YAxis
					style={{
						fontSize: '10px',
						fill: '#606C80',
					}}
				/>

				<XAxis
					type='category'
					dataKey='name'
					style={{
						fontSize: '10px',
						fill: '#606C80',
					}}
				/>
				<Tooltip
					wrapperStyle={{ outline: 'none' }}
					cursor={false}
					content={<CustomTooltip />}
				/>
				<CartesianGrid vertical={false} />

				<Bar
					isAnimationActive={false}
					dataKey='count1'
					barSize={12}
					radius={5}
					fill='#439AEA'
					label={<CustomizedLabel />}
				/>
			</BarChart>
		</ResponsiveContainer>
	)
}

export default VerticalGraphic
