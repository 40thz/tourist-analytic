import { toPercent } from '@utils/toPercent'
import React from 'react'
import {
	Bar,
	BarChart,
	Legend,
	ResponsiveContainer,
	Tooltip,
	TooltipProps,
	XAxis,
	YAxis,
} from 'recharts'
import { NameType } from 'recharts/types/component/DefaultTooltipContent'

import CustomLegend, { namesVeritcal } from './CustomLegend'

interface IVStacked {
	data: {
		name: string
		count1: number
		count2: number
		count3: number
		count4: number
		count5: number
		count6: number
	}[]

	height?: number
}

const VerticalStacked = ({ height, data }: IVStacked) => {
	const names = [
		'Выше 60 тыс',
		'36-60 тыс',
		'16-35 тыс',
		'Ниже 15 тыс',
		'Сегменты',
	]

	const CustomTooltip = ({ payload, label }: TooltipProps<any, NameType>) => {
		if (payload != undefined) {
			return (
				<div className='custom-tooltip'>
					<div className='custom-tooltip-title'>{label}</div>
					<div className='custom-tooltip-body'>
						{payload.map((item, i: number) => (
							<div className='custom-tooltip-item'>
								<div>
									<svg
										version='1.1'
										id='Layer_1'
										xmlns='http://www.w3.org/2000/svg'
										xmlnsXlink='http://www.w3.org/1999/xlink'
										x='0px'
										y='0px'
										width='10px'
										height='10px'
										viewBox='0 0 120 120'
										enable-background='new 0 0 120 120'
										xmlSpace='preserve'
										fill={item.color}>
										<circle cx='60' cy='60.834' r='54.167' />
									</svg>
								</div>

								<div>
									<span>{namesVeritcal[i]} - </span>
									<span>{item.value}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			)
		} else {
			return null
		}
	}

	const YAxisFormat = (value: any, index: number): string => {
		if (index > 4) {
			return ''
		} else {
			return names[index]
		}
	}

	const formatData = data?.map(item => {
		return {
			...item,
			count1: item.count1.toFixed(1),
			count2: item.count2.toFixed(1),
			count3: item.count3.toFixed(1),
			count4: item.count4.toFixed(1),
			count5: item.count5.toFixed(1),
			count6: item.count6.toFixed(1),
		}
	})
	return (
		<div style={{ position: 'relative' }}>
			<div className='verticalGraphic'>
				<ResponsiveContainer width='99%' height={height}>
					<BarChart data={formatData}>
						<XAxis dataKey={'name'} style={{ transform: 'translateY(20px)' }} />
						<YAxis
							orientation='right'
							tickFormatter={YAxisFormat}
							width={160}
						/>
						<Tooltip
							wrapperStyle={{ outline: 'none' }}
							cursor={false}
							content={<CustomTooltip />}
						/>
						<Legend content={<CustomLegend />} />
						<Bar
							isAnimationActive={false}
							dataKey='count1'
							stackId='a'
							fill='#6AC57E'
							barSize={12}
							radius={[0, 0, 10, 10]}
						/>
						<Bar
							isAnimationActive={false}
							dataKey='count2'
							stackId='a'
							fill='#FFB84D'
							barSize={12}
						/>
						<Bar
							isAnimationActive={false}
							dataKey='count3'
							stackId='a'
							fill='#7C87EC'
							barSize={12}
						/>
						<Bar
							isAnimationActive={false}
							dataKey='count4'
							stackId='a'
							fill='#F5E265'
							barSize={12}
						/>
						<Bar
							isAnimationActive={false}
							dataKey='count5'
							stackId='a'
							fill='#F18C8A'
							barSize={12}
						/>
						<Bar
							isAnimationActive={false}
							dataKey='count6'
							stackId='a'
							fill='#B595C5'
							barSize={12}
							radius={[10, 10, 0, 0]}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default VerticalStacked
