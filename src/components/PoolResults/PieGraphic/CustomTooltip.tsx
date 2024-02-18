import { toPercent } from '@utils/toPercent'
import React from 'react'
import { TooltipProps } from 'recharts'
import { NameType } from 'recharts/types/component/DefaultTooltipContent'
interface ITooltip extends TooltipProps<any, NameType> {
	total?: number
	onlyPercent?: boolean
}
const CustomTooltip = ({
	total,
	payload,
	label,
	onlyPercent,
	...props
}: ITooltip) => {
	if (payload != undefined && total != undefined) {
		if (onlyPercent) {
			return (
				<div className='custom-tooltip'>
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
								fill={payload[0]?.payload.fill}>
								<circle cx='60' cy='60.834' r='54.167' />
							</svg>
						</div>

						<div>
							<span>{payload[0]?.name} - </span>
							<span>{toPercent(payload[0]?.value)} %</span>
						</div>
					</div>
				</div>
			)
		} else {
			const percentage = (partialValue: number, totalValue: number) => {
				return Math.round((100 * partialValue) / totalValue)
			}

			const percent = percentage(payload[0]?.value, total)

			return (
				<div className='custom-tooltip'>
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
								fill={payload[0]?.payload.fill}>
								<circle cx='60' cy='60.834' r='54.167' />
							</svg>
						</div>

						<div>
							<span>{payload[0]?.name} - </span>
							<span>
								{payload[0]?.value} ({percent} %)
							</span>
						</div>
					</div>
				</div>
			)
		}
	} else {
		return null
	}
}

export default CustomTooltip
