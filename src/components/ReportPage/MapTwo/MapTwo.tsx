import CustomSelector from '@components/CustomSelector/CustomSelector'
import Map from '@components/MapContainer/MapContainer'
import { is } from 'immer/dist/internal'

import React from 'react'

const MapTwo = ({ data }: { data: { name: string; count: string }[] }) => {
	const legendMap = [
		{
			name: 'Реализуется',
			color: '#407FFE',
		},
		{
			name: 'Отсутствует',
			color: '#95B6F8',
		},
	]

	const formatData = data?.map(item => {
		return {
			...item,
			count: item.count
				.toString()
				.toLowerCase()
				.replace(/(\r\n|\n|\r)/gm, ' ')
				.split(' ')
				.join('')
				.split(','),
		}
	})
	const sortData = formatData
		?.map(item => item.count)
		.toString()
		.split(',')

	let uniqueChars = [...new Set(sortData)]

	const [selectedRegions, setRegions] = React.useState<string[]>([])

	const isSelected = (region: string): string => {
		if (selectedRegions.includes(region)) {
			console.log(region)
			return '#407FFE'
		}
		return '#95B6F8'
	}
	return (
		<div className='map__container'>
			<div className='map__selector'>
				<CustomSelector
					onChange={item => {
						const selectedRegions = []

						for (let i = 0; i < formatData.length; i++) {
							for (let j = 0; j < item.length; j++) {
								if (formatData[i].count.includes(item[j].name)) {
									selectedRegions.push(formatData[i].name)
								}
							}
						}
						setRegions(selectedRegions)
						console.log(formatData)
						console.log(selectedRegions)
						//console.log(formatData[0].count.includes(item[0].name))
					}}
					isMulti
					options={uniqueChars.map((item, index) => {
						return { id: index, name: item }
					})}
				/>
			</div>

			<Map
				defaultMapColor='#95B6F8'
				legend={legendMap}
				isCategoryMap
				dataMapZones={{
					achinsk: isSelected('город Ачинск'),
					borodino: isSelected('город Бородино'),
					divnogorsk: isSelected('город Дивногорск'),
					eniseysk: isSelected('город Енисейск'),
					kansk: isSelected('город Канск'),
					kedrovyj: isSelected('поселок Кедровый'),
					krasnoyarsk: isSelected('город Красноярск'),
					lesosibirsk: isSelected('город Лесосибирск'),
					minusinsk: isSelected('город Минусинск'),
					nazarovo: isSelected('город Назарово'),
					norilsk: isSelected('город Норильск'),
					sosnovoborsk: isSelected('город Сосновоборск'),
					sharypovo: isSelected('город Шарыпово'),
					abanskij_rajon: isSelected('Абанский муниципальный район'),
					achinskij_rajon: isSelected('Ачинский муниципальный район'),
					balakhtinskij_rajon: isSelected('Балахтинский муниципальный район'),
					berezovskij_rajon: isSelected('Березовский муниципальный район'),
					biriljusskij_rajon: isSelected('Бирилюсский муниципальный район'),
					bogotolskij_rajon: isSelected('Боготольский муниципальный район'),
					boguchanskij_rajon: isSelected('Богучанский муниципальный район'),
					bolshemurtinskij_rajon: isSelected(
						'Большемуртинский муниципальный район'
					),
					bolsheulujskij_rajon: isSelected(
						'Большеулуйский муниципальный район'
					),
					dzerzhinskij_rajon: isSelected('Дзержинский муниципальный район'),
					emeljanovskij_rajon: isSelected('Емельяновский муниципальный район'),
					enisejskij_rajon: isSelected('Енисейский муниципальный район'),
					ermakovskij_rajon: isSelected('Ермаковский муниципальный район'),
					idrinskij_rajon: isSelected('Идринский муниципальный район'),
					ilanskij_rajon: isSelected('Иланский муниципальный район'),
					irbejskij_rajon: isSelected('Ирбейский муниципальный район'),
					kazachinskij_rajon: isSelected('Казачинский муниципальный район'),
					kanskij_rajon: isSelected('Канский муниципальный район'),
					karatuzskij_rajon: isSelected('Каратузский муниципальный район'),
					kezhemskij_rajon: isSelected('Кежемский муниципальный район'),
					kozulskij_rajon: isSelected('Козульский муниципальный район'),
					krasnoturanskij_rajon: isSelected(
						'Краснотуранский муниципальный район'
					),
					kuraginskij_rajon: isSelected('Курагинский муниципальный район'),
					manskij_rajon: isSelected('Манский муниципальный район'),
					minusinskij_rajon: isSelected('Минусинский муниципальный район'),
					motyginskij_rajon: isSelected('Мотыгинский муниципальный район'),
					nazarovskij_rajon: isSelected('Назаровский муниципальный район'),
					nizhneingashskij_rajon: isSelected(
						'Нижнеингашский муниципальный район'
					),
					novoselovskij_rajon: isSelected('Новоселовский муниципальный район'),
					partizanskij_rajon: isSelected('Партизанский муниципальный район'),
					pirovskij_rajon: isSelected('Пировский муниципальный округ'),
					rybinskij_rajon: isSelected('Рыбинский муниципальный район'),
					severoenisejskij_rajon: isSelected(
						'Северо-Енисейский муниципальный район'
					),
					sukhobuzimskij_rajon: isSelected('Сухобузимский муниципальный район'),
					taseevskij_rajon: isSelected('Тасеевский муниципальный район'),
					tajmyrskaja: isSelected(
						'Таймырский Долгано-Ненецкий муниципальный район'
					),
					turukhanskij_rajon: isSelected('Туруханский муниципальный район'),
					tjukhtetskij_rajon: isSelected('Тюхтетский муниципальный округ'),
					uzhurskij_rajon: isSelected('Ужурский муниципальный район'),
					ujarskij_rajon: isSelected('Уярский муниципальный район'),
					sharypovskij_rajon: isSelected('Шарыповский муниципальный округ'),
					shushenskij_rajon: isSelected('Шушенский муниципальный район'),
					evenkiyskiy: isSelected('Эвенкийский муниципальный район'),
					bogotol: isSelected('город Боготол'),
				}}
			/>
		</div>
	)
}

export default MapTwo
