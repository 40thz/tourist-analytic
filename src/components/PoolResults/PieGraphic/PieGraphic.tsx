import { COLORS } from '@components/Officalstat/PieGraphic/PieGraphic'
import { total } from '@utils/total'

import React from 'react'
import {
	PieChart,
	Pie,
	Cell,
	Legend,
	ResponsiveContainer,
	Tooltip,
} from 'recharts'
import { IGraphic } from '../types'
import CustomizedLabel from './CustomizedLabel'
import CustomTooltip from './CustomTooltip'

interface IPie {
	legend?: React.ReactNode | any
	title?: string
	legendY?: string | any
	data: IGraphic[]
	height?: number
}

const PieGraphic = ({
	legend,
	height = 290,
	title,
	legendY = 'top',
	data,
}: IPie) => {
	const onlyNumber = data?.map(item => item.count1)

	const dataTotal = total(onlyNumber)

	return (
		<div className='pieGraphic'>
			<div className='pieGraphic__title'>{title}</div>
			<ResponsiveContainer width='99%' height={height}>
				<PieChart>
					{legend && (
						<Legend
							content={legend}
							layout='vertical'
							verticalAlign={legendY}
							align='right'
						/>
					)}
					<Tooltip
						wrapperStyle={{ outline: 'none' }}
						content={<CustomTooltip total={dataTotal} />}
					/>
					<Pie
						isAnimationActive={false}
						dataKey='count1'
						data={data}
						fill='#8884d8'
						orientation={'left'}
						labelLine={false}
						blendStroke={true}
						label={CustomizedLabel}>
						{data?.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</div>
	)
}

export default PieGraphic
