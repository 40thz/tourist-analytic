import HistoryGraph from '@components/Statistics/HistoryGraph/HistoryGraph'
import StatisticsTable from '@components/Statistics/StatisticsTable/StatisticsTable'
import StatisticsTableRegion from '@components/Statistics/StatisticsTableRegion/StatisticsTableRegion'
import Title from '@components/Title/Title'
import React from 'react'

const StatisticPage = () => {
	return (
		<section id='statistic-page'>
			<Title value='Статистика по локации' />
			<div className='statistic-page-wrapper'>
				<HistoryGraph />
				<StatisticsTableRegion />
				<StatisticsTable />
			</div>
		</section>
	)
}

export default StatisticPage
