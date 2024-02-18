import React from 'react'

import {
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Area,
	AreaChart,
	ResponsiveContainer,
} from 'recharts'

import { mouthes } from 'src/constants/mouthes'
import { historyPlug } from 'src/constants/plug'
import { useTypedSelector } from 'src/hooks/useTypedSelector'

import Plug from '../Plug/Plug'

import CustomTooltip from './CustomTooltip'

const HistoryGraph = () => {
	const { data, name } = useTypedSelector(
		state => state.wordstat.statisticPhrase
	)

	const formatXAxis = (tickItem: number) => mouthes[tickItem]

	return (
		<div className='statistic__history'>
			<div className='statistics__table-header'>
				<div style={{ padding: '10px 0' }} className='statistics__table-title'>
					Статистика по запросу <span title={name}>“{name}”</span>
				</div>
			</div>

			<div style={{ position: 'relative' }}>
				{!data.length && <Plug white />}
				<ResponsiveContainer width='99%' height={300}>
					<AreaChart
						margin={{ top: 30, left: 0, right: 30, bottom: 30 }}
						width={700}
						height={300}
						data={
							data.length
								? data.map(item => {
										if (item.fyear === -1) {
											return { ...item, fyear: 0 }
										} else {
											return item
										}
								  })
								: historyPlug
						}>
						<defs>
							<linearGradient id='colorfyear' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='#fff' stopOpacity={0.5} />
								<stop offset='95%' stopColor='#fff' stopOpacity={0} />
							</linearGradient>
							<linearGradient id='colorlyear' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='#f54994' stopOpacity={0.8} />
								<stop offset='95%' stopColor='#f54994' stopOpacity={0} />
							</linearGradient>
						</defs>
						<XAxis
							tick={{ fill: 'white' }}
							fontSize={13}
							tickFormatter={formatXAxis}
						/>
						<YAxis tick={{ fill: 'white' }} fontSize={13} />
						<CartesianGrid stroke='rgba(255, 255, 255, 0.1)' />
						<Tooltip
							wrapperStyle={{ outline: 'none' }}
							content={<CustomTooltip />}
						/>
						<Area
							type='monotone'
							dataKey='fyear'
							stroke='#fff'
							fillOpacity={1}
							fill='url(#colorfyear)'
							animationDuration={1500}
						/>
						<Area
							type='monotone'
							dataKey='lyear'
							stroke='#f54994'
							fillOpacity={1}
							fill='url(#colorlyear)'
							animationDuration={2500}
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default HistoryGraph
