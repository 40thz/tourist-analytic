import React from 'react'
import { useQuery } from 'react-query'
import { WordstatService } from '@service/wordstat.api'
import StatisticsPhrases from './StatisticsPhrases'
import CountUp from 'react-countup'
import Loader from '../Loader/Loader'

import useOnClickOutside from '@hooks/useOnClickOutside'

export interface IStatItem {
	value: string
	count: number
	onClick?: any
	disabled?: boolean
}

const StatisticsLocation = (props: IStatItem) => {
	const [active, setActive] = React.useState(false)

	const locationTabRef = React.useRef<HTMLDivElement>(null)

	useOnClickOutside(
		locationTabRef,
		() => setActive(false),
		'.statistics__table-body'
	)

	const {
		data: response,
		isLoading,
		refetch,
	} = useQuery(
		['locations list', props.value],
		() => WordstatService.getPhrases(props.value),
		{
			enabled: false,
		}
	)

	const clickHandler = () => {
		if (!active && !props.disabled) refetch()
		if (!props.disabled) setActive(!active)
	}

	return (
		<div ref={locationTabRef}>
			<div onClick={clickHandler} className='statistic-item locations'>
				<div
					style={{ transform: `rotate(${active ? '180deg' : '0'})` }}
					className='statistic-item-icon'>
					<svg
						width='12'
						height='14'
						viewBox='0 0 12 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M1 1L6 6L11 1M1 8L6 13L11 8'
							stroke='#439AEA'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
				<div className='statistic-item-name'>{props.value}</div>
				<div className='statistic-item-count'>
					<CountUp separator={' '} duration={1} start={0} end={props.count} />
				</div>
			</div>
			{active && (
				<div className='statistic-item-locations'>
					{isLoading ? (
						<Loader />
					) : (
						response?.data
							.sort((a, b) => b.shows - a.shows)
							.map(item => {
								if (!item.frequency) {
									return (
										<StatisticsPhrases
											key={item._id}
											value={item.name}
											count={item.shows}
										/>
									)
								}
							})
					)}
				</div>
			)}
		</div>
	)
}

export default StatisticsLocation
