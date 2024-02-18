import React from 'react'
import CountUp from 'react-countup'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { AudienceService } from '@service/audience.api'
import { useQuery } from 'react-query'
import { useAction } from 'src/hooks/useActions'
import Tooltip from '@components/Tooltip/Tooltip'

const Counter = () => {
	const { setCounter } = useAction()
	const { data: response, counters } = useTypedSelector(state => state.audience)

	const { isLoading, data } = useQuery(['getCounter', response], () =>
		AudienceService.getCounter({ data: response })
	)

	React.useEffect(() => {
		setCounter({
			isLoading,
			actualCounter: data?.data.actualData?.audience_count,
			potentialCounter: data?.data.potentialData?.audience_count,
		})
	}, [response, isLoading])

	return (
		<div>
			<div className='audience__counter'>
				<div className='audience__counter-shows'>
					<div className='audience__counter-header'>
						<span>Потенциальное количество туристов:</span>
						<Tooltip text='Общее количество пользователей сети, имеющих интерес к туризму по России' />
					</div>
					<div className='countUp'>
						<CountUp
							separator={' '}
							duration={2}
							start={0}
							end={counters.potentialCounter}
						/>

						<span>чел.</span>
					</div>
				</div>

				<div className='audience__counter-shows'>
					<div className='audience__counter-header'>
						<span>Фактическое количество туристов:</span>
						<Tooltip text='Количество пользователей сети, фактически посещявших Красноярский край с туристическими целями или в рабочих поездках' />
					</div>
					<div className='countUp'>
						<CountUp
							separator={' '}
							duration={2}
							start={0}
							end={counters.actualCounter}
						/>

						<span>чел.</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Counter
