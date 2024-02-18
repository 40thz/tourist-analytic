import CountUp from 'react-countup'
import { TooltipProps } from 'recharts'
import { NameType } from 'recharts/types/component/DefaultTooltipContent'

const CustomTooltip = ({
	active,
	payload,
	label,
}: TooltipProps<any, NameType>) => {
	const data = new Date()
	if (active && payload && payload.length) {
		return (
			<div className='custom-tooltip'>
				<div className='label fyear'>
					{`${data.getFullYear()} - `}
					<CountUp
						separator={' '}
						duration={0.3}
						start={0}
						end={payload?.[0].value}
						suffix=' шт.'
					/>
				</div>

				<div className='label lyear'>
					{`${data.getFullYear() - 1} - `}
					<CountUp
						separator={' '}
						duration={0.3}
						start={0}
						end={payload[1].value}
						suffix=' шт.'
					/>
				</div>
			</div>
		)
	}

	return null
}

export default CustomTooltip
