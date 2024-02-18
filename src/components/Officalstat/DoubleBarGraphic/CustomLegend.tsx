import React from 'react'
import { LegendProps } from 'recharts'

interface ICustomLegend extends LegendProps {
	data: {
		type: 'circle' | 'box' | 'line'
		name: string
		color?: string
	}[]
}

const CustomLegend = ({ data }: ICustomLegend) => {
	return (
		<div className='customLegend'>
			{data.map(item => (
				<div className='customLegend-item'>
					{item.type === 'box' && (
						<div
							className='customLegend-item-box'
							style={{ backgroundColor: item.color }}></div>
					)}

					{item.type === 'line' && (
						<svg
							width='50'
							height='9'
							viewBox='0 0 50 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M5 5H44.5' stroke={item.color} stroke-width='2' />
							<circle
								cx='45.5'
								cy='4.5'
								r='3.5'
								fill='white'
								stroke={item.color}
								stroke-width='2'
							/>
							<circle
								cx='4.5'
								cy='4.5'
								r='3.5'
								fill='white'
								stroke={item.color}
								stroke-width='2'
							/>
						</svg>
					)}
					<div className='customLegend-item-name'>{item.name}</div>
				</div>
			))}
		</div>
	)
}

export default CustomLegend
