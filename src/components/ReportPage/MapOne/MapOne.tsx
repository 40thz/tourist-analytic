import CustomSelector from '@components/CustomSelector/CustomSelector'
import Map from '@components/MapContainer/MapContainer'

import React from 'react'

const MapOne = ({ data }: { data: { name: string; count: number }[][] }) => {
	const legendMap = [
		{
			name: 'Высокий',
			color: '#00308F',
		},
		{
			name: 'Средний',
			color: '#407FFE',
		},
		{
			name: 'Низкий',
			color: '#d9e6fc',
		},
	]

	const [currentData, setData] = React.useState<any>(data[13])

	const formatRegion = (name: string): string => {
		const formatData = currentData?.map((item: any) => {
			return {
				...item,
				count: Number(item.count.toFixed(3)),
			}
		})

		for (let i = 0; i < currentData?.length; i++) {
			if (formatData[i].name === name) {
				if (formatData[i].count >= 0.68) {
					return '#00308F'
				}
				if (formatData[i].count >= 0.34) {
					return '#407FFE'
				}
			}
		}
		return '#95B6F8'
	}

	return (
		<div className='map__container'>
			<div className='map__selector'>
				<CustomSelector
					onChange={item => setData(data[item.id])}
					defaultValue={{
						id: 13,
						name: 'Общий',
					}}
					options={[
						{
							id: 3,
							name: 'Гастрономический',
						},
						{
							id: 4,
							name: 'Экологический',
						},
						{
							id: 5,
							name: 'Кемпинг',
						},
						{
							id: 6,
							name: 'Спорт, экстремальный',
						},
						{
							id: 7,
							name: 'Культурно-познавательный',
						},
						{
							id: 8,
							name: 'Событийный',
						},
						{
							id: 9,
							name: 'Пляжный',
						},
						{
							id: 10,
							name: 'Лечебно-оздоровительный',
						},
						{
							id: 11,
							name: 'Промысловый',
						},
						{
							id: 12,
							name: 'Сельский',
						},
						{
							id: 13,
							name: 'Общий',
						},
					]}
				/>
			</div>
			<Map
				defaultMapColor='#95B6F8'
				legend={legendMap}
				dataMapZones={{
					krasnoyarsk: formatRegion('Красноярск'),
					eniseysk: formatRegion('Енисейск'),
					achinsk: formatRegion('Ачинск'),
					turukhanskij_rajon: formatRegion('Туруханский'),
					minusinskij_rajon: formatRegion('Минусинский'),
					ermakovskij_rajon: formatRegion('Ермаковский'),
					evenkiyskiy: formatRegion('Эвенкийский'),
					shushenskij_rajon: formatRegion('Шушенский'),
					taseevskij_rajon: formatRegion('Тасеевский'),
					achinskij_rajon: formatRegion('Ачинский'),
					sharypovskij_rajon: formatRegion('Шарыповский'),
					kansk: formatRegion('Канск'),
					minusinsk: formatRegion('Минусинск'),
					bogotolskij_rajon: formatRegion('Боготол'),
					norilsk: formatRegion('Норильск'),
					sharypovo: formatRegion('Шарыпово'),
					lesosibirsk: formatRegion('Лесосибирск'),
					nazarovo: formatRegion('Назарово'),
					rybinskij_rajon: formatRegion('Рыбинский'),
					tajmyrskaja: formatRegion('Таймырский (Долгано-Ненецкий)'),
					emeljanovskij_rajon: formatRegion('Емельяновский'),
					borodino: formatRegion('Бородино'),
					enisejskij_rajon: formatRegion('Енисейский'),
					bolshemurtinskij_rajon: formatRegion('Большемуртинский'),
					balakhtinskij_rajon: formatRegion('Балахтинский'),
					kedrovyj: formatRegion('Кедровый'),
					irbejskij_rajon: formatRegion('Ирбейский'),
					sajanskij_rajon: formatRegion('Саянский'),
					boguchanskij_rajon: formatRegion('Богучанский'),
					abanskij_rajon: formatRegion('Абанский'),
					kazachinskij_rajon: formatRegion('Казачинский'),
					kuraginskij_rajon: formatRegion('Курагинский'),
					kozulskij_rajon: formatRegion('Козульский'),
					manskij_rajon: formatRegion('Манский'),
					berezovskij_rajon: formatRegion('Березовский'),
					sukhobuzimskij_rajon: formatRegion('Сухобузимский'),
					ujarskij_rajon: formatRegion('Ужурский'),
					kanskij_rajon: formatRegion('Канский'),
					nizhneingashskij_rajon: formatRegion('Нижнеингашский'),
					partizanskij_rajon: formatRegion('Партизанский'),
					krasnoturanskij_rajon: formatRegion('Краснотуранский'),
					dzerzhinskij_rajon: formatRegion('Дзержинский'),
					karatuzskij_rajon: formatRegion('Каратузский'),
					divnogorsk: formatRegion('Дивногорск'),
					tjukhtetskij_rajon: formatRegion('Тюхтетский'),
					ilanskij_rajon: formatRegion('Иланский'),
					kezhemskij_rajon: formatRegion('Кежемский'),
					biriljusskij_rajon: formatRegion('Бирилюсский'),
					novoselovskij_rajon: formatRegion('Новоселовский'),
					motyginskij_rajon: formatRegion('Мотыгинский'),
					sosnovoborsk: formatRegion('Сосновоборск'),
					idrinskij_rajon: formatRegion('Идринский'),
					uzhurskij_rajon: formatRegion('Ужурский'),
					pirovskij_rajon: formatRegion('Пировский'),
					bolsheulujskij_rajon: formatRegion('Большеулуйский'),
					nazarovskij_rajon: formatRegion('Назаровский'),
					severoenisejskij_rajon: formatRegion('Северо-Енисейский'),
				}}
			/>
		</div>
	)
}

export default MapOne
