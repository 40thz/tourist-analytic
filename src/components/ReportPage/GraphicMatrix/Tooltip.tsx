import React from 'react'
import { TooltipProps } from 'recharts'
import { NameType } from 'recharts/types/component/DefaultTooltipContent'

interface ITooltip extends TooltipProps<any, NameType> {
	prefix?: any
}

const CustomTooltip = ({ payload, prefix }: ITooltip) => {
	if (payload != undefined) {
		return (
			<div className='custom-tooltip'>
				<span>
					{payload[0]?.payload.name} - {payload[0]?.payload.count}
				</span>
			</div>
		)
	} else return null
}

export default CustomTooltip
