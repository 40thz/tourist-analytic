import React from 'react'
import { AudienceService } from '@service/audience.api'
import { useQuery } from 'react-query'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import CustomSelector, {
	IOptionSelect,
} from '@components/CustomSelector/CustomSelector'
import { useAction } from '@hooks/useActions'
import { concatenateStrings } from 'src/utils/concatenateStrings'

const Geography = () => {
	let cityId = 1
	const { setCities, setData } = useAction()
	const [enabled, setEnabled] = React.useState<boolean>(true)

	const [selectorCity, setSelectorCity] = React.useState<any>()
	const [selectorNotCity, setSelectorNotCity] = React.useState<any>()

	const { data: response } = useQuery('countries list', () =>
		AudienceService.getCountries()
	)

	const { refetch } = useQuery(
		['cities list', cityId],
		() => AudienceService.getCities(cityId),
		{
			onSuccess: ({ data }) => {
				setCities(data)
			},
			enabled: false,
		}
	)

	const { cities } = useTypedSelector(state => state.audience.geography)

	const changeHandlerCountry = (value: IOptionSelect) => {
		cityId = value.id
		setData({ country: value.id })
		setEnabled(false)
		refetch()
		selectorCity.clearValue()
		selectorNotCity.clearValue()
		if (value.id === 0) setEnabled(true)
	}

	return (
		<section id='geography'>
			<h2 className='audience__title'>География</h2>
			<div className='geography'>
				<div className='audience__container'>
					<div className='audience__selector'>
						<div className='audience__selector-title'>Страна</div>
						<CustomSelector
							placeholder='Выберите страну или город'
							onChange={changeHandlerCountry}
							options={response?.data}
						/>
					</div>
					<div className='audience__selector'>
						<div className='audience__selector-title'>Города и регионы</div>
						<CustomSelector
							placeholder='Выберите город/регион'
							onChange={array => setData({ cities: concatenateStrings(array) })}
							options={cities}
							isDisabled={enabled}
							refFunc={setSelectorCity}
							isMulti
						/>
					</div>
					<div className='audience__selector'>
						<div className='audience__selector-title'>За исключением</div>
						<CustomSelector
							placeholder='Выбрать'
							onChange={array =>
								setData({ cities_not: concatenateStrings(array) })
							}
							options={cities}
							isDisabled={enabled}
							refFunc={setSelectorNotCity}
							isMulti
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Geography
