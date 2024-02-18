import CustomizedLabel from '@components/PoolResults/PieGraphic/CustomizedLabel'
import CustomTooltip from '@components/PoolResults/PieGraphic/CustomTooltip'
import classNames from 'classnames'
import React from 'react'
import {
	ResponsiveContainer,
	PieChart,
	Pie,
	Legend,
	Cell,
	LegendProps,
	Tooltip,
} from 'recharts'

const CustomizeLegend = ({ payload }: LegendProps) => {
	return (
		<div className='customLegend'>
			{payload?.map(item => (
				<div className='customLegend-item'>
					<svg
						width='14'
						height='10'
						viewBox='0 0 14 10'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M0 9.5C1.41941e-07 7.81158 0.456717 6.15721 1.31797 4.72592C2.17922 3.29462 3.41027 2.14413 4.87045 1.40589C6.33064 0.66765 7.96108 0.37144 9.57547 0.551103C11.1899 0.730766 12.7231 1.37906 14 2.4219L8.65455 9.5L0 9.5Z'
							fill={item.color}
						/>
					</svg>
					<span
						style={{
							fontSize: '14px',
							color: '#606C80',
						}}>
						{item.value}
					</span>
				</div>
			))}
		</div>
	)
}
export const COLORS = [
	'#439AEA',
	'#6AC57E',
	'#B594C4',
	'#F18C8B',
	'#F6E265',
	'#00308F',
	'#FFB84C',
	'#95B6F8',
	'#837663',
	'#E0D5C3',
]
const PieGraphic = ({
	title,
	legend,
	data,
}: {
	title?: string
	legend?: boolean
	data?: any
}) => {
	return (
		<div style={{ width: '100%', height: 300 }}>
			<ResponsiveContainer width='99%'>
				<PieChart>
					<Tooltip
						wrapperStyle={{ outline: 'none' }}
						content={<CustomTooltip total={3000} onlyPercent />}
					/>
					{legend && (
						<Legend
							layout='vertical'
							align='right'
							verticalAlign='middle'
							content={<CustomizeLegend />}
						/>
					)}
					<Pie
						isAnimationActive={false}
						dataKey='count'
						data={data}
						fill='#8884d8'
						label={<CustomizedLabel />}
						labelLine={false}
						blendStroke={true}>
						{data?.map((entry: any, index: any) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			<div className={classNames('pie_title', `year${title}`)}>{title}</div>
		</div>
	)
}

export default PieGraphic
