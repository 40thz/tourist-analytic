import { toPercent } from '@utils/toPercent'
import React from 'react'

import {
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	BarChart,
	LabelList,
} from 'recharts'

import CustomizedLabel from './CustomizedLabel'

interface IHStacked {
	data: {
		name: string
		count1: number
		count2: number
		count3: number
		count4: number
		count5: number
		title1: string
		title2: string
		title3: string
		title4: string
		title5: string
	}[]

	height?: number
	subtitle?: string
}

const HorizontalStacked = ({ height, subtitle, data }: IHStacked) => {
	const formatData = data?.map(item => {
		return {
			...item,
			count1: toPercent(item.count1),
			count2: toPercent(item.count2),
			count3: toPercent(item.count3),
			count4: toPercent(item.count4),
			count5: toPercent(item.count5),
		}
	})
	return (
		<div style={{ position: 'relative' }}>
			<div className='horizontalGraphic'>
				<ResponsiveContainer width='99%' height={height}>
					<BarChart
						margin={{
							left: 0,
							top: 30,
							bottom: 20,
						}}
						data={formatData}
						layout='vertical'>
						<XAxis type='number' tick={false} />

						<Bar
							isAnimationActive={false}
							name='1213131'
							dataKey='count1'
							stackId='a'
							fill='#85BAE5'
							radius={[20, 0, 0, 20]}
							barSize={12}>
							<LabelList dataKey='count1' content={<CustomizedLabel />} />
							<LabelList
								fontSize={12}
								color='#606C80'
								dataKey='title1'
								position='bottom'
								content={<CustomizedLabel itsNameBar />}
							/>
							<LabelList
								fontSize={14}
								color='#606C80'
								dataKey='name'
								width={400}
								position='top'
								textAnchor='left'
								content={<CustomizedLabel itsName />}
							/>
						</Bar>
						<Bar
							isAnimationActive={false}
							dataKey='count2'
							stackId='a'
							fill='#B595C5'
							barSize={12}>
							<LabelList dataKey='count2' content={<CustomizedLabel />} />
							<LabelList
								fontSize={12}
								color='#606C80'
								dataKey='title2'
								content={<CustomizedLabel itsNameBar />}
								position='bottom'
							/>
						</Bar>
						<Bar
							isAnimationActive={false}
							dataKey='count3'
							stackId='a'
							fill='#F18C8A'
							barSize={12}
							width={1}>
							<LabelList dataKey='count3' content={<CustomizedLabel />} />
							<LabelList
								fontSize={12}
								color='#606C80'
								dataKey='title3'
								content={<CustomizedLabel itsNameBar />}
								position='bottom'
							/>
						</Bar>
						<Bar
							isAnimationActive={false}
							dataKey='count4'
							stackId='a'
							fill='#F5C465'
							barSize={12}
							width={1}>
							<LabelList dataKey='count4' content={<CustomizedLabel />} />
							<LabelList
								fontSize={12}
								color='#606C80'
								dataKey='title4'
								content={<CustomizedLabel itsNameBar />}
								position='bottom'
							/>
						</Bar>
						<Bar
							isAnimationActive={false}
							dataKey='count5'
							stackId='a'
							fill='#6AC57E'
							radius={[0, 20, 20, 0]}
							barSize={12}
							width={1}>
							<LabelList dataKey='count5' content={<CustomizedLabel />} />
							<LabelList
								fontSize={12}
								color='#606C80'
								dataKey='title5'
								content={<CustomizedLabel itsNameBar />}
								position='bottom'
							/>
						</Bar>
						{/* <Bar
							dataKey='count'
							fill='#439AEA'
							label={{ position: 'right' }}
							radius={30}
							barSize={12}
							animationDuration={2000}>
														<LabelList
								fontSize={12}
								color='#606C80'
								dataKey='count'
								content={<CustomizedLabel itsNameBar />}
								position='right'
							/>
						</Bar> */}
					</BarChart>
				</ResponsiveContainer>

				{subtitle && <div className='grphic__subtitle'>{subtitle}</div>}
			</div>
		</div>
	)
}

export default HorizontalStacked
