import React from 'react'
import { IPhrase, WordstatService } from '@service/wordstat.api'
import { useQuery } from 'react-query'
import StatisticsLocation from '../StatisticsLocation'
import CountUp from 'react-countup'
import StatisticsPhrases from '../StatisticsPhrases'
import Loader from '@components/Statistics/Loader/Loader'

import LocalNot from './LocalNot'

import useOnClickOutside from '@hooks/useOnClickOutside'

//import StatisticsLocation from '../StatisticsLocation'

interface IStatItem {
	value: string
	count: number
	general?: boolean
	freq?: boolean
	items?: any
}

const StatisticsRegion = (props: IStatItem) => {
	const [active, setActive] = React.useState(false)

	const regionTabRef = React.useRef(null)

	useOnClickOutside(
		regionTabRef,
		() => setActive(false),
		'.statistics__table-body'
	)

	const {
		data: response,
		isLoading,
		refetch,
	} = useQuery(
		['locations list', props.value],
		() => WordstatService.getLocations(props.value),
		{
			enabled: false,
		}
	)

	const {
		data: responsePhrases,
		isLoading: isLoadingPhrases,
		refetch: refetchPhrases,
	} = useQuery(
		['locations list', props.value],
		() => WordstatService.getPhrases(props.value),
		{
			enabled: false,
		}
	)

	const clickHandler = () => {
		if (!active && !props.general && !props.freq) refetch()
		if (!active && props.general && !props.freq) refetchPhrases()
		setActive(!active)
	}

	return (
		<div ref={regionTabRef}>
			<div onClick={clickHandler} className='statistic-item'>
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
				<div className='statistic-item-items'>
					{!props.general ? (
						isLoading ? (
							<Loader />
						) : (
							<>
								{response?.data
									.sort((a, b) => b.shows - a.shows)
									.map(item => (
										<StatisticsLocation
											key={item._id}
											value={item.name}
											count={item.shows}
										/>
									))}
							</>
						)
					) : isLoadingPhrases ? (
						<Loader />
					) : (
						<>
							{responsePhrases?.data
								.sort((a, b) => b.shows - a.shows)
								.map(item => (
									<StatisticsPhrases
										key={item._id}
										value={item.name}
										count={item.shows}
									/>
								))}
						</>
					)}

					{props.freq && (
						<>
							{props.items?.map((item: IPhrase) => (
								<StatisticsPhrases
									key={item._id}
									value={item.name}
									count={item.shows}
								/>
							))}
						</>
					)}
					{!isLoading && <LocalNot value={props.value} />}
				</div>
			)}
		</div>
	)
}

export default StatisticsRegion
