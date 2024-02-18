import React from 'react'

import StatisticsRegion from './StatisticsRegion/StatisticsRegion'
import Loader from '../Loader/Loader'
import StatisticsFreq from './StatisticsFreq'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { useQuery } from 'react-query'
import { WordstatService } from '@service/wordstat.api'

import CustomSelector, {
	IOptionSelect,
} from '@components/CustomSelector/CustomSelector'

const StatisticsTable = () => {
	const { data: response, isLoading } = useQuery('getRegions', () =>
		WordstatService.getRegions()
	)

	const options = [
		{ id: 0, name: 'Запросы в разрезе локаций' },
		{
			id: 1,
			name: 'Запросы общей информации',
		},
		{ id: 2, name: 'Планируемая длительность пребывания' },
	]

	const [activeTab, setTab] = React.useState(0)

	const chnageHandler = (item: IOptionSelect) => {
		setTab(item === null ? activeTab : item.id)
	}

	return (
		<div className='statistics__table-wrapper'>
			<div className='statistics__table-header'>
				<div className='statistics__table-title'>
					Таблица поисковых запросов
				</div>

				<div className='statistics__table-control'>
					<CustomSelector
						defaultValue={options[0]}
						onChange={chnageHandler}
						options={options}
						isSearchable={false}
					/>
				</div>
			</div>

			<div className='statistics__table'>
				<div className='statistics__table-labels'>
					<div className='statistics__table-labels-name'>
						Поисковый запрос(локация)
					</div>
					<div
						title='В период ограничения работы сервиса, прогнозное значение на сентябрь'
						className='statistics__table-labels-count'>
						Прогнозное значение на текущий месяц. шт
					</div>
				</div>
				<Scrollbars
					style={{ height: '100%' }}
					renderTrackHorizontal={({ style, ...props }) => (
						<div {...props} style={{ ...style, backgroundColor: 'blue' }} />
					)}>
					<div className='statistics__table-body'>
						{!isLoading ? (
							<>
								{activeTab === 0 && (
									<>
										{response?.data
											.sort((a, b) => b.shows - a.shows)
											.map((item, i) => {
												if (!item.general) {
													return (
														<StatisticsRegion
															key={item._id}
															value={item.name}
															count={item.shows}
															general={item.general}
														/>
													)
												}
											})}

										<StatisticsRegion value='Саянский район' count={0} />
										<StatisticsRegion value='Тюхтетский район' count={0} />
									</>
								)}

								{activeTab === 1 && (
									<>
										{response?.data
											.sort((a, b) => b.shows - a.shows)
											.map((item, i) => {
												if (item.general) {
													return (
														<StatisticsRegion
															key={item._id}
															value={item.name}
															count={item.shows}
															general={item.general}
														/>
													)
												}
											})}
									</>
								)}

								{activeTab === 2 && <StatisticsFreq />}
							</>
						) : (
							<Loader />
						)}
					</div>
				</Scrollbars>
			</div>
		</div>
	)
}

export default StatisticsTable
