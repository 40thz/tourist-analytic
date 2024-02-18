import { toPercent } from '@utils/toPercent'
import React from 'react'
import { IGraphic } from '../types'

const Line = ({ data }: { data: IGraphic[] }) => {
	const colors = ['#F18C8B', '#85B9E5', '#6AC57E']

	const formatData = data?.map(item => {
		return {
			...item,
			count1: toPercent(item.count1),
		}
	})
	return (
		<div className='linegraphic'>
			{formatData?.map((item, i) => (
				<div
					className='linegraphic-item'
					style={{
						width: `${item.count1}%`,
						backgroundColor: colors[i],
					}}>
					<div
						style={{
							position: 'absolute',
							top: '-25px',
							left: '10px',
							fontSize: '14px',
							color: '#606C80',
						}}>
						{item.name}
					</div>
					<div style={{ fontSize: '10px', color: '' }}>{item.count1}%</div>
				</div>
			))}
		</div>
	)
}

export default Line
