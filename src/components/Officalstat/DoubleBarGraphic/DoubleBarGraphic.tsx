import React from 'react'

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ComposedChart,
	Line,
	ResponsiveContainer,
	Label,
	LabelList,
} from 'recharts'
import { ContentType } from 'recharts/types/component/DefaultLegendContent'
import { toPercent } from '../../../utils/toPercent'
import CustomTooltip from './CustomTooltip'

export interface IGraphicBar {
	data?: {
		name: string | number
		count: number | any
		count2: number | any
		count3: number | any
	}[]
	options?: {
		format: {
			count?: 'rounded' | 'percent' | 'fixed'
			count2?: 'rounded' | 'percent' | 'fixed'
			count3?: 'rounded' | 'percent' | 'fixed'
		}
		prefix?: {
			count?: string
			count2?: string
			count3?: string
		}
		multiYAxis?: boolean
	}
	legend?: ContentType
	elements: {
		type: 'Bar' | 'Line'
		dataKey: string
		color: string
	}[]
}

const DoubleBarGraphic = ({ legend, elements, data, options }: IGraphicBar) => {
	const formatData = data?.map(item => {
		return {
			...item,
			count:
				options?.format.count === 'rounded'
					? Math.round(item.count)
					: options?.format.count === 'percent'
					? toPercent(item.count)
					: options?.format.count === 'fixed'
					? Number(item.count).toFixed(1)
					: item.count,
			count2:
				options?.format.count2 === 'rounded'
					? Math.round(item.count2)
					: options?.format.count2 === 'percent'
					? toPercent(item.count2)
					: options?.format.count2 === 'fixed'
					? Number(item.count2).toFixed(1)
					: item.count2,
			count3:
				options?.format.count3 === 'rounded'
					? Math.round(item.count3)
					: options?.format.count3 === 'percent'
					? toPercent(item.count3)
					: options?.format.count3 === 'fixed'
					? Number(item.count3).toFixed(1)
					: item.count3,
		}
	})
	if (options?.multiYAxis) {
		return (
			<ResponsiveContainer width='99%' height={400}>
				<ComposedChart
					className='doubleBarGraphic'
					data={formatData}
					margin={{
						top: 25,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<CartesianGrid vertical={false} />
					<XAxis dataKey='name' style={{ fontSize: '14px', fill: '#606C80' }} />
					<YAxis
						dataKey='count'
						yAxisId='left'
						style={{ fontSize: '10px', fill: '#606C80' }}
						orientation='left'
						type='number'
						tick={{ dx: -25 }}
					/>
					<YAxis
						dataKey='count2'
						yAxisId='right'
						style={{ fontSize: '10px', fill: '#606C80' }}
						orientation='right'
						type='number'
						tick={{ dx: 25 }}
					/>

					<Tooltip
						content={<CustomTooltip prefix={options?.prefix} />}
						wrapperStyle={{ outline: 'none' }}
					/>
					{legend && <Legend content={legend} />}

					{elements &&
						elements.map(item => {
							if (item.type === 'Bar') {
								return (
									<Bar
										yAxisId='right'
										isAnimationActive={false}
										dataKey={item.dataKey}
										fill={item.color}
										barSize={14}
										radius={12}
									/>
								)
							}
							if (item.type === 'Line') {
								return (
									<Line
										yAxisId='left'
										isAnimationActive={false}
										dataKey={item.dataKey}
										stroke={item.color}
										strokeWidth={2}>
										<LabelList
											dataKey={item.dataKey}
											fontSize={12}
											offset={14}
											position='insideBottom'
										/>
									</Line>
								)
							}
						})}
				</ComposedChart>
			</ResponsiveContainer>
		)
	} else {
		return (
			<ResponsiveContainer width='99%' height={400}>
				<ComposedChart
					className='doubleBarGraphic'
					data={formatData}
					margin={{
						top: 25,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<CartesianGrid vertical={false} />
					<XAxis dataKey='name' style={{ fontSize: '14px', fill: '#606C80' }} />
					<YAxis
						style={{ fontSize: '10px', fill: '#606C80' }}
						orientation='left'
						tick={{ dx: -25 }}
					/>

					<Tooltip
						content={<CustomTooltip prefix={options?.prefix} />}
						wrapperStyle={{ outline: 'none' }}
					/>
					{legend && <Legend content={legend} />}

					{elements &&
						elements.map(item => {
							if (item.type === 'Bar') {
								return (
									<Bar
										isAnimationActive={false}
										dataKey={item.dataKey}
										fill={item.color}
										barSize={14}
										radius={12}
									/>
								)
							}
							if (item.type === 'Line') {
								return (
									<Line
										isAnimationActive={false}
										dataKey={item.dataKey}
										stroke={item.color}
										strokeWidth={2}>
										<LabelList
											dataKey={item.dataKey}
											fontSize={12}
											offset={14}
											position='insideBottom'
										/>
									</Line>
								)
							}
						})}
				</ComposedChart>
			</ResponsiveContainer>
		)
	}
}

export default DoubleBarGraphic
