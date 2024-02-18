import { WordstatService } from '@service/wordstat.api'
import React from 'react'
import { useQuery } from 'react-query'
import StatisticsRegion from './StatisticsRegion/StatisticsRegion'

const StatisticsFreq = () => {
	const { data: response } = useQuery(['get freq list'], () =>
		WordstatService.getPhraseByFreq()
	)

	const total = (freq: number) => {
		const data = response?.data.filter(item => item.frequency === freq)

		const arrFreq = data?.map(item => item.shows)

		const initialValue = 0

		if (arrFreq !== undefined) {
			const sumWithInitial: number = arrFreq?.reduce(
				(previousValue: number, currentValue: number) =>
					previousValue + currentValue,
				initialValue
			)
			return sumWithInitial
		}
		return 0
	}

	const filterByDays = (freq: number) => {
		const data = response?.data.filter(item => item.frequency === freq)

		return data
	}
	return (
		<div>
			{Array.apply(null, Array(5)).map((item, i) => (
				<StatisticsRegion
					value={`Частота ${i + 1} ${
						i + 1 === 1 ? 'день' : i + 1 === 5 ? 'дней' : 'дня'
					}`}
					count={total(i + 1)}
					freq
					items={filterByDays(i + 1)}
				/>
			))}
		</div>
	)
}

export default StatisticsFreq
