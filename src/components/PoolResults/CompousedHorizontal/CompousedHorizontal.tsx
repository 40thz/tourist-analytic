import React from 'react'
import {
	ComposedChart,
	Bar,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Label,
	ResponsiveContainer,
	TooltipProps,
} from 'recharts'
import CustomizedLabel from './CustomizedLabel'
import { toPercent } from '../../../utils/toPercent'
import { NameType } from 'recharts/types/component/DefaultTooltipContent'

interface ICHGraphic {
	data: {
		name: string
		count1: number
		count2: number
	}[]
}

const CustomTooltip = ({
	payload,
	label,
	...props
}: TooltipProps<any, NameType>) => {
	if (payload != undefined) {
		return (
			<div className='custom-tooltip'>
				<div className='custom-tooltip-title'>{payload[0]?.payload.name}</div>
				<div className='custom-tooltip-body'>
					<div className='custom-tooltip-item'>
						<span>Важность для туриста - {payload[0]?.payload.count1} %</span>
					</div>
					<div className='custom-tooltip-item'>
						<span>Оценка - {payload[0]?.payload.count2}</span>
					</div>
				</div>
			</div>
		)
	} else {
		return null
	}
}

const CompousedHorizontal = ({ data }: ICHGraphic) => {
	const longestLabelLength = data
		?.map(c => c.name)
		.reduce((acc, cur) => (cur.length > acc ? cur.length : acc), 0)

	const formatData = data?.map(item => {
		return {
			...item,
			count1: toPercent(item.count1),
			count2: item.count2.toFixed(1),
		}
	})
	return (
		<>
			<ResponsiveContainer
				className='compousedHorizontal'
				width='99%'
				height={400}>
				<ComposedChart layout='vertical' data={formatData}>
					<XAxis
						type='number'
						orientation='top'
						style={{
							fontSize: '10px',
							color: '#606C80',
						}}
					/>

					<XAxis
						xAxisId='bottom'
						type='number'
						dataKey='count2'
						orientation='bottom'
						style={{
							fontSize: '10px',
							color: '#606C80',
						}}
					/>
					<YAxis
						yAxisId='left'
						dataKey='name'
						type='category'
						orientation='left'
						fill='#439AEA'
						width={200}
					/>
					<YAxis
						yAxisId='right'
						dataKey='count2'
						type='category'
						orientation='right'
						fill='#439AEA'
						width={60}
						style={{
							fontSize: '14px',
							fontWeight: 'bold',
							fill: '#273141',
						}}>
						<Label
							dx={20}
							style={{
								textAnchor: 'middle',
								fontSize: '14px',
								color: '#606C80',
								fill: '#606C80',
							}}
							angle={270}
							value={'Оценка'}
						/>
					</YAxis>

					<Tooltip
						wrapperStyle={{ outline: 'none' }}
						cursor={false}
						content={<CustomTooltip />}
					/>

					<Bar
						isAnimationActive={false}
						name='Важность для туриста'
						fill='#439AEA'
						radius={30}
						barSize={12}
						dataKey='count1'
						label={<CustomizedLabel />}
						yAxisId='left'
					/>

					<Line
						isAnimationActive={false}
						name='Оценка'
						yAxisId='left'
						dataKey='count2'
						stroke='#273141'
						strokeWidth={2}
						xAxisId='bottom'
					/>
				</ComposedChart>
			</ResponsiveContainer>

			<div className='compousedLegend'>
				<div className='compousedLegend-item'>
					<svg
						width='68'
						height='9'
						viewBox='0 0 68 9'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M5 5H64' stroke='#273141' stroke-width='2' />
						<circle
							cx='63.5'
							cy='4.5'
							r='3.5'
							fill='white'
							stroke='#273141'
							stroke-width='2'
						/>
						<circle
							cx='4.5'
							cy='4.5'
							r='3.5'
							fill='white'
							stroke='#273141'
							stroke-width='2'
						/>
					</svg>
					*Оценка уровня развития инфраструктуры (балл)
				</div>
				<div className='compousedLegend-item'>
					<svg
						width='68'
						height='12'
						viewBox='0 0 68 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect
							x='68'
							width='12'
							height='68'
							rx='6'
							transform='rotate(90 68 0)'
							fill='#439AEA'
						/>
					</svg>
					*Важность для туриста
				</div>
			</div>
		</>
	)
}

export default CompousedHorizontal
