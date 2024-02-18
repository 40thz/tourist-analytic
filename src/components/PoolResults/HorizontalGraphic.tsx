import React, { ChangeEvent, useState } from 'react'

import {
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	BarChart,
	LabelList,
	TooltipProps,
} from 'recharts'

import FileUploader from '@components/FileUploader/FileUploader'
import Protect from '@components/Protect'
import { IGraphic } from './types'
import { toPercent } from '@utils/toPercent'
import { NameType } from 'recharts/types/component/DefaultTooltipContent'

export interface IHGraphic {
	height: number
	data: IGraphic[]
	subtitle?: string
}

const HorizontalGraphic = ({ height, data, subtitle }: IHGraphic) => {
	const [chceckWidth] = React.useState(
		document.body.offsetWidth <= 1280 ? 5 : 10
	)
	const CustomTooltip = ({ payload }: TooltipProps<any, NameType>) => {
		if (payload != undefined) {
			return (
				<div className='custom-tooltip'>
					{payload[0]?.payload.name}: {payload[0]?.value} %
				</div>
			)
		} else {
			return null
		}
	}

	const formatDataName = data?.map(item => {
		return {
			...item,
			name: item.name.length > 50 ? item.name.slice(0, 30) + '...' : item.name,
		}
	})
	const longestLabelLength = formatDataName
		?.map(c => c.name)
		.reduce((acc, cur) => (cur.length > acc ? cur.length : acc), 0)

	const formatData = formatDataName?.map(item => {
		return {
			...item,
			name: item.name.replace(/^[^a-zа-яё]*([a-zа-яё])/i, function (m) {
				return m.toUpperCase()
			}),
			count1: toPercent(item.count1),
		}
	})

	return (
		<div style={{ position: 'relative' }}>
			<div className='horizontalGraphic'>
				<ResponsiveContainer width='99%' height={height}>
					<BarChart
						margin={{
							left: 0,
						}}
						data={formatData?.sort((a, b) => b.count1 - a.count1)}
						layout='vertical'>
						<XAxis type='number' tick={false} />
						<YAxis
							type='category'
							dataKey='name'
							width={longestLabelLength * chceckWidth}
						/>

						<Tooltip
							wrapperStyle={{ outline: 'none' }}
							cursor={false}
							content={<CustomTooltip />}
						/>

						<Bar
							isAnimationActive={false}
							dataKey='count1'
							fill='#439AEA'
							label={{ position: 'right' }}
							radius={30}
							barSize={12}>
							<LabelList
								dataKey='count1'
								formatter={(value: number) => `${value}%`}
								position='right'
							/>
						</Bar>
					</BarChart>
				</ResponsiveContainer>

				{subtitle && <div className='grphic__subtitle'>{subtitle}</div>}
			</div>
		</div>
	)
}

export default HorizontalGraphic
