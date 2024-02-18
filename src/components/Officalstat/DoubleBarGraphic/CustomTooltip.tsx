import React from 'react'
import { TooltipProps } from 'recharts'
import { NameType } from 'recharts/types/component/DefaultTooltipContent'
import { IGraphicBar } from './DoubleBarGraphic'

interface ITooltip extends TooltipProps<any, NameType> {
	prefix?: any
}

const CustomTooltip = ({ payload, prefix }: ITooltip) => {
	if (payload != undefined) {
		return (
			<div className='custom-tooltip'>
				{payload.map(item => {
					const index: any = item.dataKey?.toString()
					if (!isNaN(item.value)) {
						return (
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
									<span>
										{item.value} {prefix && prefix[index]}
									</span>
								</div>
							</div>
						)
					}
				})}
			</div>
		)
	} else return null
}

export default CustomTooltip
