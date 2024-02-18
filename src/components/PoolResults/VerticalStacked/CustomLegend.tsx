import React from 'react'
import { LegendProps } from 'recharts'

export const namesVeritcal = [
	'Проживание',
	'Питание',
	'Развлечения/досуг',
	'Экскурсии',
	'Шопинг',
	'Прочие расходы',
]

const CustomLegend = ({ payload }: LegendProps) => {
	return (
		<div className='vericalLegend'>
			{payload?.map((item, i) => (
				<div className='vericalLegend-item'>
					<svg
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect width='12' height='12' rx='6' fill={item.color} />
					</svg>
					{namesVeritcal[i]}
				</div>
			))}
		</div>
	)
}

export default CustomLegend
