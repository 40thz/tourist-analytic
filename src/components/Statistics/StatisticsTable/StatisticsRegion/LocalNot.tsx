import React from 'react'

import StatisticsLocation from '../StatisticsLocation'

import { v4 as uuidv4 } from 'uuid'

import { local } from 'src/constants/locationNot'

const LocalNot: any = ({ value }: { value: string }) => {
	switch (value) {
		case 'Шушенский район':
			return (
				<StatisticsLocation
					value='Историко-этнографический'
					count={0}
					disabled
				/>
			)
		case 'Иланский район':
			return (
				<StatisticsLocation
					value='Природный родник с чистой водой'
					count={0}
					disabled
				/>
			)
		case 'Красноярск':
			return <StatisticsLocation value='Пещера Караульная' count={0} disabled />
		case 'Общее Ачинский р-н':
			return (
				<StatisticsLocation value='Пещера Айдашенская' count={0} disabled />
			)
		case 'Общее Бирилюсский р-н':
			return (
				<StatisticsLocation value='Свято-Троицкий храм' count={0} disabled />
			)
		case 'Общее Козульский р-н':
			return (
				<StatisticsLocation
					value='Церковь Николая Чудотворца'
					count={0}
					disabled
				/>
			)
		case 'Общее Мотыгинский р-н':
			return (
				<StatisticsLocation
					value='Мотыгинское многоостровье культовый комплекс'
					count={0}
					disabled
				/>
			)
		case 'Краснотуранский район':
			return (
				<StatisticsLocation
					value='Государственный комплексный природный заказник краевого значения'
					count={0}
					disabled
				/>
			)
		case 'Ужурский район':
			return <StatisticsLocation value='Скалы Сундуки' count={0} disabled />
		case 'Общее Богучанский р-н':
			return local[0].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))

		case 'Большемуртинский':
			return local[1].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))

		case 'Березовский район':
			return local[2].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))

		case 'Абанский район':
			return local[3].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Ермаковкий район':
			return local[4].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Енисейский район':
			return local[5].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Идринский район':
			return local[6].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Общее Ирбейский р-н':
			return local[7].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Канский собор':
			return local[8].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Шарыповский район':
			return local[9].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Курагинский район':
			return local[10].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Каратузский район':
			return local[11].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Казачинский район':
			return local[12].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Кежемский район':
			return local[13].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Минусинский район':
			return local[14].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Общее Нижнеингашский р-н':
			return local[15].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Новоселовский район':
			return local[16].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Эвенкийский район':
			return local[17].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Манский район':
			return local[18].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Партизанский район':
			return local[19].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Рыбинский район':
			return local[20].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Саянский район':
			return local[21].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Общее Сухобузимский р-н':
			return local[22].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Таймырский Долгано-Ненецкий район':
			return local[23].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Тасеевский район':
			return local[24].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Туруханский район':
			return local[25].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
		case 'Уярский район':
			return local[26].map((item: string) => (
				<StatisticsLocation key={uuidv4()} value={item} count={0} disabled />
			))
	}
}

export default LocalNot
