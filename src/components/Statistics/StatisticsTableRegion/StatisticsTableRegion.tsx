import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import CountUp from 'react-countup'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import Plug from '../Plug/Plug'

const StatisticsTableRegion = () => {
	const { regions } = useTypedSelector(state => state.wordstat.statisticPhrase)

	return (
		<div className='statistics__tableRegions-wrapper'>
			{!regions && <Plug />}
			{regions?.length < 1 && <Plug />}
			<div className='statistics__tableRegions-labels'>
				<div className='statistics__tableRegions-label'>Название региона</div>
				<div className='statistics__tableRegions-label'>
					Кол-во поисковых операций, шт.
				</div>
			</div>
			<Scrollbars
				style={{ height: '100%' }}
				renderTrackHorizontal={({ style, ...props }) => (
					<div {...props} style={{ ...style, backgroundColor: 'blue' }} />
				)}>
				<div className='statistics__tableRegions'>
					{regions?.length > 1 &&
						regions?.map(item => (
							<div key={item.name} className='statistics__tableRegions-item'>
								<div className='statistics__tableRegions-item-name'>
									{item.name}
								</div>
								<div className='statistics__tableRegions-item-count'>
									<CountUp
										separator={' '}
										duration={1}
										start={0}
										end={item.shows || 0}
									/>
								</div>
							</div>
						))}
				</div>
			</Scrollbars>
		</div>
	)
}

export default StatisticsTableRegion
