import React, { ChangeEvent } from 'react'
import Title from '@components/Title/Title'
import ContentBox from '@components/PoolResults/ContentBox/ContentBox'
import Content from '@components/PoolResults/Content/Content'
import DoubleBarGraphic from '@components/Officalstat/DoubleBarGraphic/DoubleBarGraphic'
import CustomLegend from '@components/Officalstat/DoubleBarGraphic/CustomLegend'
import PieGraphic from '@components/Officalstat/PieGraphic/PieGraphic'
import { useQuery } from 'react-query'

import FileUploader from '@components/FileUploader/FileUploader'
import { readExcelFile } from '@utils/readExcelFile'

import { GraphicService } from '@service/graphics.api'
import Protect from '@components/Protect'

const Officalstat = () => {
	const [data, setData] = React.useState([])
	const dataGraphic: any[] = []

	const {} = useQuery(
		'getupdategraphicoffical',
		() => GraphicService.getGraphic('Официальная статистика'),
		{
			onSuccess({ data }: any) {
				setData(data.data)
			},
		}
	)

	const { refetch } = useQuery(
		['updategraphicoffical', dataGraphic],
		() => GraphicService.updateGraphic('Официальная статистика', dataGraphic),
		{
			onSuccess: () => {
				setData(data)
			},
			enabled: false,
		}
	)

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const graphicData: any[] = await readExcelFile(e)

		let fullarr: any = []
		let testarr: any = []

		for (let i = 0; i < graphicData.length; i++) {
			if (graphicData[i].name === 'name') {
				fullarr.push(testarr)
				testarr = []
			} else {
				testarr.push(graphicData[i])
			}
		}
		dataGraphic.push(fullarr)
		refetch()
		setData(fullarr)
	}
	return (
		<section className='officalstat'>
			<div>
				<Title value='Официальная статистика' />
			</div>
			<ContentBox
				className='officalstat-three twoToOne'
				title='1. Потенциальная емкость рынка внутреннего туризма'
				savedSection={
					<Protect>
						<FileUploader
							type='download'
							src='/Офф.стат.xlsx'
							onChange={handleChange}
						/>
						<FileUploader type='upload' onChange={handleChange} />
					</Protect>
				}>
				<Content title='Объем и структура спроса на туристические услуги в РФ за 2016-2021гг'>
					<DoubleBarGraphic
						data={data[0]}
						options={{
							format: {
								count: 'rounded',
								count2: 'rounded',
								count3: 'rounded',
							},
							prefix: {
								count: 'тыс. чел.',
								count2: 'тыс. чел.',
								count3: 'тыс. чел.',
							},
						}}
						legend={
							<CustomLegend
								data={[
									{
										name: 'Число отправленных в туры российских туристов, по России, тыс. чел.',
										type: 'box',
										color: '#00308F',
									},
									{
										name: 'Число отправленных в туры российских туристов, в зарубежные страны, тыс. чел.',
										type: 'box',
										color: '#439AEA',
									},
									{
										name: 'Общий туристический поток, тыс. чел.',
										type: 'line',
										color: '#273141',
									},
								]}
							/>
						}
						elements={[
							{ type: 'Bar', dataKey: 'count', color: '#00308F' },
							{ type: 'Bar', dataKey: 'count2', color: '#439AEA' },
							{ type: 'Line', dataKey: 'count3', color: '#273141' },
						]}
					/>
				</Content>
				<Content title='Доля внутреннего туризма в РФ за 2016-2021гг'>
					<DoubleBarGraphic
						data={data[1]}
						options={{
							format: {
								count: 'percent',
							},
							prefix: {
								count: '%',
							},
						}}
						legend={
							<CustomLegend
								data={[
									{
										name: 'Доля внутренних туристов по количеству, %',
										type: 'line',
										color: '#273141',
									},
								]}
							/>
						}
						elements={[{ type: 'Line', dataKey: 'count', color: '#273141' }]}
					/>
				</Content>
				<Content title='Объем и потенциальная емкость рынка в РФ за 2016-2020гг'>
					<DoubleBarGraphic
						data={data[2]}
						options={{
							format: {
								count: 'rounded',
								count2: 'rounded',
							},
							prefix: {
								count: 'тыс. руб.',
								count2: 'млн. руб.',
							},
							multiYAxis: true,
						}}
						legend={
							<CustomLegend
								data={[
									{
										name: 'Потенциальная емкость рынка туристских услуг, млн. руб.',
										type: 'line',
										color: '#273141',
									},
									{
										name: 'Объем рынка туристских услуг, тыс. руб.',
										type: 'line',
										color: '#439AEA',
									},
								]}
							/>
						}
						elements={[
							{ type: 'Line', dataKey: 'count', color: '#439AEA' },
							{ type: 'Line', dataKey: 'count2', color: '#273141' },
						]}
					/>
				</Content>
			</ContentBox>

			<ContentBox
				title='2. Формирование перечня вариантов для путешествия'
				className='officalstat-one'>
				<Content title='Структура внутреннего туризма в разрезе федеральных округов РФ'>
					<PieGraphic title='2018' data={data[3]} />
					<PieGraphic title='2019' data={data[4]} />
					<PieGraphic title='2020' data={data[5]} />
					<PieGraphic legend title='2021' data={data[6]} />
				</Content>
				<Content title='Структура туризма Сибирского федерального округа в разрезе регионов	'>
					<PieGraphic title='2018' data={data[7]} />
					<PieGraphic title='2019' data={data[8]} />
					<PieGraphic title='2020' data={data[9]} />
					<PieGraphic legend title='2021' data={data[10]} />
				</Content>
			</ContentBox>

			<ContentBox
				className='officalstat-three'
				title='3. Определение потенциальной привлекательности Красноярского края как туристкой дестинации'>
				<Content title='Объем инвестиций в сфере гостеприимства и общественного питания Красноярского края за 2016-2021гг'>
					<DoubleBarGraphic
						data={data[11]}
						options={{
							format: {
								count: 'fixed',
								count2: 'rounded',
							},
							prefix: {
								count: 'руб.',
								count2: 'млн. руб.',
							},
							multiYAxis: true,
						}}
						legend={
							<CustomLegend
								data={[
									{
										name: 'Объем инвестиций в деятельность гостиниц и предприятий общественного питания, млн. руб.',
										type: 'box',
										color: '#439AEA',
									},
									{
										name: 'Уровень возврата инвестиций, руб.',
										type: 'line',
										color: '#273141',
									},
								]}
							/>
						}
						elements={[
							{ type: 'Bar', dataKey: 'count2', color: '#439AEA' },
							{ type: 'Line', dataKey: 'count', color: '#273141' },
						]}
					/>
				</Content>
				<Content title='Количество коллективных средствразмещения в Красноярском крае за 2016-2020гг'>
					<DoubleBarGraphic
						data={data[12]}
						options={{
							format: {
								count: 'rounded',
								count2: 'rounded',
								count3: 'rounded',
							},
							prefix: {
								count: 'шт.',
								count2: 'шт.',
								count3: 'шт.',
							},
						}}
						legend={
							<CustomLegend
								data={[
									{
										name: 'Гостиницы и аналогичные средства размещения, шт.',
										type: 'box',
										color: '#439AEA',
									},
									{
										name: 'Специализированные средства размещения, шт.',
										type: 'box',
										color: '#00308F',
									},
									{
										name: 'Общее число коллективных средств размещения, шт.',
										type: 'line',
										color: '#273141',
									},
								]}
							/>
						}
						elements={[
							{ type: 'Bar', dataKey: 'count2', color: '#00308F' },
							{ type: 'Bar', dataKey: 'count3', color: '#439AEA' },
							{ type: 'Line', dataKey: 'count', color: '#273141' },
						]}
					/>
				</Content>
				<Content title='Количество номеров в коллективных средствах размещения в Красноярском крае за 2016-2020гг'>
					<DoubleBarGraphic
						data={data[13]}
						options={{
							format: {
								count: 'fixed',
								count2: 'fixed',
								count3: 'fixed',
							},
							prefix: {
								count: 'шт.',
								count2: 'шт.',
								count3: 'шт.',
							},
						}}
						legend={
							<CustomLegend
								data={[
									{
										name: 'Гостиницы и аналогичные средства размещения, шт.',
										type: 'box',
										color: '#439AEA',
									},
									{
										name: 'Специализированные средства размещения, шт.',
										type: 'box',
										color: '#00308F',
									},
									{
										name: 'Общее чисто номеров, шт.',
										type: 'line',
										color: '#273141',
									},
								]}
							/>
						}
						elements={[
							{ type: 'Bar', dataKey: 'count3', color: '#439AEA' },
							{ type: 'Bar', dataKey: 'count2', color: '#00308F' },
							{ type: 'Line', dataKey: 'count', color: '#273141' },
						]}
					/>
				</Content>
				<Content title='Показатели развития сферы общественного питания в Красноярском крае за 2016-2021гг'>
					<DoubleBarGraphic
						data={data[14]}
						options={{
							format: {
								count: 'rounded',
								count2: 'rounded',
							},
							prefix: {
								count: 'млн. руб.',
								count2: 'шт.',
							},
							multiYAxis: true,
						}}
						legend={
							<CustomLegend
								data={[
									{
										name: 'Количество мест в местах общественного питания, тыс. шт.',
										type: 'box',
										color: '#439AEA',
									},
									{
										name: 'Оборот общественного питания, млн. руб.',
										type: 'line',
										color: '#273141',
									},
								]}
							/>
						}
						elements={[
							{ type: 'Bar', dataKey: 'count2', color: '#439AEA' },
							{ type: 'Line', dataKey: 'count', color: '#273141' },
						]}
					/>
				</Content>
				<Content title='Показатели развития сферы торговли в Красноярском крае за 2016-2021гг'>
					<DoubleBarGraphic
						data={data[15]}
						options={{
							format: {
								count: 'rounded',
								count2: 'rounded',
							},
							prefix: {
								count: 'млн. руб.',
								count2: 'тыс.кв.м.',
							},
							multiYAxis: true,
						}}
						legend={
							<CustomLegend
								data={[
									{
										name: 'Совокупная площадь торговых помещений, тыс.кв.м.',
										type: 'box',
										color: '#439AEA',
									},
									{
										name: 'Оборот розничной торговли, млн. руб.',
										type: 'line',
										color: '#273141',
									},
								]}
							/>
						}
						elements={[
							{ type: 'Bar', dataKey: 'count2', color: '#439AEA' },
							{ type: 'Line', dataKey: 'count', color: '#273141' },
						]}
					/>
				</Content>
				<Content title='Пассажирооборот в Красноярском крае за 2016-2021гг'>
					<DoubleBarGraphic
						data={data[18]}
						options={{
							format: {
								count: 'rounded',
								count2: 'rounded',
							},
							prefix: {
								count: 'млн. чел.',
								count2: 'млн. чел.',
							},
						}}
						legend={
							<CustomLegend
								data={[
									{
										name: 'Пассажирооборот железнодорожным транспортом, млн. чел.',
										type: 'box',
										color: '#439AEA',
									},
									{
										name: 'Пассажирооборот автобусным сообщением, млн. чел.',
										type: 'box',
										color: '#00308F',
									},
								]}
							/>
						}
						elements={[
							{ type: 'Bar', dataKey: 'count2', color: '#439AEA' },
							{ type: 'Bar', dataKey: 'count', color: '#00308F' },
						]}
					/>
				</Content>
			</ContentBox>

			<ContentBox
				className='officalstat-three'
				title='4. Реализованный спрос на туристические услуги Красноярского края'>
				<Content title='Число ночевок в коллективных средствах размещения в Красноярском крае за 2016-2021гг'>
					<DoubleBarGraphic
						data={data[16]}
						options={{
							format: {
								count: 'fixed',
								count2: 'rounded',
								count3: 'rounded',
							},
							prefix: {
								count: 'шт.',
								count2: 'шт.',
								count3: 'шт.',
							},
						}}
						legend={
							<CustomLegend
								data={[
									{
										name: 'Общее число ночевок в гостиницах и аналогичных средствах размещения, шт.',
										type: 'box',
										color: '#439AEA',
									},
									{
										name: 'Общее число ночевок в специализированных средствах размещения, шт.',
										type: 'box',
										color: '#00308F',
									},
									{
										name: 'Общее число ночевок в коллективных средств размещения, шт.',
										type: 'line',
										color: '#273141',
									},
								]}
							/>
						}
						elements={[
							{ type: 'Bar', dataKey: 'count2', color: '#00308F' },
							{ type: 'Bar', dataKey: 'count3', color: '#439AEA' },
							{ type: 'Line', dataKey: 'count', color: '#273141' },
						]}
					/>
				</Content>
				<Content title='Количество коллективных средствразмещения в Красноярском крае за 2016-2021гг'>
					<DoubleBarGraphic
						data={data[17]}
						options={{
							format: {
								count: 'rounded',
								count2: 'rounded',
								count3: 'rounded',
							},
							prefix: {
								count: 'ночевок/номер.',
								count2: 'ночевок/номер.',
								count3: 'ночевок/номер.',
							},
						}}
						legend={
							<CustomLegend
								data={[
									{
										name: 'Уровень использования гостиниц и аналогичных средств размещения, ночевок/номер',
										type: 'box',
										color: '#439AEA',
									},
									{
										name: 'Уровень использования специализированных средств размещения, ночевок/номер',
										type: 'box',
										color: '#00308F',
									},
									{
										name: 'Общий уровень использования коллективных средств размещения, ночевок/номер',
										type: 'line',
										color: '#273141',
									},
								]}
							/>
						}
						elements={[
							{ type: 'Bar', dataKey: 'count3', color: '#439AEA' },
							{ type: 'Bar', dataKey: 'count2', color: '#00308F' },
							{ type: 'Line', dataKey: 'count', color: '#273141' },
						]}
					/>
				</Content>
				<Content title='Количество номеров в коллективных средствах размещения в Красноярском крае за 2016-2021гг'>
					<DoubleBarGraphic
						data={data[19]}
						options={{
							format: {
								count: 'fixed',
								count2: 'fixed',
							},
							prefix: {
								count: 'тыс. руб.',
								count2: 'тыс. руб.',
							},
						}}
						legend={
							<CustomLegend
								data={[
									{
										name: 'Оборот общественного питания в расчете на 1 туриста, тыс. руб.',
										type: 'line',
										color: '#439AEA',
									},
									{
										name: 'Оборот розничной торговли в расчете на 1 туриста, тыс. руб',
										type: 'line',
										color: '#273141',
									},
								]}
							/>
						}
						elements={[
							{ type: 'Line', dataKey: 'count2', color: '#439AEA' },
							{ type: 'Line', dataKey: 'count', color: '#273141' },
						]}
					/>
				</Content>
				<Content title='Показатели развития сферы общественного питания в Красноярском крае за 2016-2021гг'>
					<DoubleBarGraphic
						data={data[20]}
						options={{
							format: {
								count: 'fixed',
							},
							prefix: {
								count: 'руб.',
							},
						}}
						legend={
							<CustomLegend
								data={[
									{
										name: 'Объем инвестиций в расчете на 1 туриста, руб.',
										type: 'line',
										color: '#273141',
									},
								]}
							/>
						}
						elements={[{ type: 'Line', dataKey: 'count', color: '#273141' }]}
					/>
				</Content>
			</ContentBox>
		</section>
	)
}

export default Officalstat
