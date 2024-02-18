import React from 'react'
import {
	ResponsiveContainer,
	RadialBarChart,
	RadialBar,
	Legend,
	LabelList,
	Tooltip,
} from 'recharts'
import CustomTooltip from '../GraphicMatrix/Tooltip'
const RadialChart = ({
	currentCity,
	totalKrsk = 0,
	totalCurrentCity,
}: {
	currentCity: { id: number; name: string }
	totalKrsk: number
	totalCurrentCity?: number
}) => {
	const data = [
		{
			name: currentCity?.name ? currentCity.name : 'Выбранный город',
			count: totalCurrentCity
				? totalCurrentCity
				: currentCity
				? Math.round(
						(totalKrsk / 100) *
							(currentCity?.id <= 5
								? 70
								: currentCity?.id >= 100
								? 50
								: currentCity?.id)
				  )
				: 0,
			fill: '#6AC57E',
		},
		{ name: 'Всего Красноярский край', count: totalKrsk, fill: '#439AEA' },
	]

	return (
		<>
			<ResponsiveContainer width={300} height={300}>
				<RadialBarChart
					style={{ background: 'none' }}
					innerRadius={90}
					outerRadius={140}
					cx={'50%'}
					cy={'50%'}
					endAngle={340}
					startAngle={90}
					barSize={30}
					data={data}>
					<Tooltip content={<CustomTooltip />} />
					<RadialBar
						background={{ fill: 'white' }}
						dataKey='count'
						cornerRadius='23'
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</>
	)
}

export default RadialChart
