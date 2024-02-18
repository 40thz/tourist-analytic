import Content from '@components/PoolResults/Content/Content'
import ContentBox from '@components/PoolResults/ContentBox/ContentBox'
import HorizontalGraphic from '@components/PoolResults/HorizontalGraphic'
import CustomLegend from '@components/PoolResults/PieGraphic/CustomLegend'
import PieGraphic from '@components/PoolResults/PieGraphic/PieGraphic'
import MapGraphic from '@components/PoolResults/MapGraphic/MapGraphic'

import Title from '@components/Title/Title'
import React from 'react'
import HorizontalStacked from '../components/PoolResults/HorizontalStacked/HorizontalStacked'

import VerticalStacked from '@components/PoolResults/VerticalStacked/VerticalStacked'
import CompousedHorizontal from '../components/PoolResults/CompousedHorizontal/CompousedHorizontal'
import Line from '@components/PoolResults/Line/Line'
import VerticalGraphic from '../components/PoolResults/VerticalGraphic/VerticalGraphic'
import FileUploader from '@components/FileUploader/FileUploader'
import { readExcelFile } from '@utils/readExcelFile'
import { ChangeEvent } from 'react'
import { COLORS } from '@components/Officalstat/PieGraphic/PieGraphic'
import Protect from '@components/Protect'
import Map from '@components/MapContainer/MapContainer'
import { useQuery } from 'react-query'
import { GraphicService } from '@service/graphics.api'

const PoolResult = () => {
	const [data, setData] = React.useState<any[][]>([])
	const dataGraphic: any[] = []

	const {} = useQuery(
		'getgraphicpool',
		() => GraphicService.getGraphic('Результаты опроса'),
		{
			onSuccess({ data }: any) {
				setData(data.data)
			},
		}
	)

	const { refetch } = useQuery(
		['updategraphicpool', dataGraphic],
		() => GraphicService.updateGraphic('Результаты опроса', dataGraphic),
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
		<div className='poolresults'>
			<Title value='Результаты опроса' />

			<ContentBox
				title='1. Потенциальная емкость рынка внутреннего туризма'
				savedSection={
					<Protect>
						<FileUploader
							src='Результаты опроса.xlsx'
							type='download'
							onChange={handleChange}
						/>
						<FileUploader type='upload' onChange={handleChange} />
					</Protect>
				}>
				<Content title='Структура туристов по степени вовлеченности в туризм и причины, сдерживающие туристическую активность'>
					<div className='pie__legend'>
						<PieGraphic
							height={300}
							legend={<CustomLegend type='list' />}
							legendY='middle'
							data={data[0]}
							title='Доля туристов, слабо вовлеченных в туризм'
						/>

						<PieGraphic
							height={300}
							legend={<CustomLegend type='list' />}
							data={data[1]}
							legendY='middle'
							title='Причины отказов'
						/>
					</div>
				</Content>
				<Content title='Рейтинг мотивов, определяющих потребность в отдыхе'>
					<HorizontalGraphic height={480} data={data[2]} />
				</Content>
				<Content title='Рейтинг популярности хобби, определяющих потребность в путешествии'>
					<HorizontalGraphic height={490} data={data[3]} />
				</Content>
				<Content title='Структура предпочтений туристов по длительности и частоте поездок'>
					<div className='pie_container'>
						<PieGraphic
							height={220}
							title='Поездка в течение дня (2-5 часов)'
							data={data[4]}
						/>
						<PieGraphic
							height={220}
							title='Поездка на weekend (1-2 дня)'
							data={data[5]}
						/>
						<PieGraphic
							height={220}
							title='Праздничные дни (1-6 дней особое событие)'
							data={data[6]}
						/>
						<PieGraphic
							height={220}
							title='Длительный отпуск (более 7 дней)'
							data={data[7]}
						/>
					</div>

					<div className='custom__legend-list'>
						{data[7]?.map((item, i) => {
							return (
								<div className='custom__legend-list-item'>
									<div>
										<svg
											width='14'
											height='10'
											viewBox='0 0 14 10'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M0 9.5C1.41941e-07 7.81158 0.456717 6.15721 1.31797 4.72592C2.17922 3.29462 3.41027 2.14413 4.87045 1.40589C6.33064 0.66765 7.96108 0.37144 9.57547 0.551103C11.1899 0.730766 12.7231 1.37906 14 2.4219L8.65455 9.5L0 9.5Z'
												fill={COLORS[i]}
											/>
										</svg>
									</div>
									<div> {item.name}</div>
								</div>
							)
						})}
					</div>
				</Content>
			</ContentBox>

			<ContentBox title='2. Формирование перечня вариантов для путешествия'>
				<Content title='Структура туристов по направлениям и длительности отдыха'>
					<div className='pie_container'>
						<PieGraphic
							height={220}
							title='Зарубежное направление'
							data={data[8]}
						/>
						<PieGraphic height={220} title='Россия' data={data[9]} />

						<PieGraphic
							height={220}
							title='Домашний регион'
							legendY='middle'
							// legend={<CustomLegend type='list' />}
							data={data[10]}
						/>
						<div className='pie__legend'>
							<div className='custom__legend-list'>
								{data[10]?.map((item, i) => (
									<div
										style={{ display: 'flex' }}
										className='custom__legend-list-item'>
										<div>
											<svg
												width='14'
												height='10'
												viewBox='0 0 14 10'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M0 9.5C1.41941e-07 7.81158 0.456717 6.15721 1.31797 4.72592C2.17922 3.29462 3.41027 2.14413 4.87045 1.40589C6.33064 0.66765 7.96108 0.37144 9.57547 0.551103C11.1899 0.730766 12.7231 1.37906 14 2.4219L8.65455 9.5L0 9.5Z'
													fill={COLORS[i]}
												/>
											</svg>
										</div>
										<div>{item.name}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</Content>

				<Content
					title='Критерии выбора места отдыха'
					tooltip='*Доля респондентов,  назвавших критерий как значимый'>
					<HorizontalGraphic
						height={490}
						data={data[11]}
						// subtitle='*Доля респондентов,  назвавших критерий как значимый'
					/>
				</Content>

				<Content
					title='Виды туризма как основа для формирования альтернатив путешествия'
					tooltip='*Доля респондентов,  выбравших вид туризма'>
					<HorizontalGraphic height={420} data={data[12]} />
				</Content>

				<Content
					title='Рейтинг популярности источников информации при планировании путешествия'
					tooltip='*Доля респондентов,  выбравших вид туризма'>
					<HorizontalGraphic height={420} data={data[13]} />
				</Content>
				<Content
					className='content2fr'
					title='Структура туристов, предпочитающих внутренние или зарубежные направления и причины выбора внутренних направлений'>
					<PieGraphic height={300} data={data[14]} title='Направление' />
					<PieGraphic
						height={300}
						data={data[15]}
						title='Причины выбора внутренних направлений'
					/>
				</Content>
			</ContentBox>

			<ContentBox
				className='contentbox1fr'
				title='3. Определение потенциальной привлекательности Красноярского края как туристкой дестинации'>
				<Content
					title='Рейтинг популярности регионов СФО среди туристов'
					tooltip='*Доля респондентов,  назвавших регион привлекательным для путешествия'>
					<HorizontalGraphic height={550} data={data[16]} />
				</Content>
			</ContentBox>

			<ContentBox className='mapContentBox'>
				<Content title='Привлекательность территорий Красноярского края для туризма'>
					<Map
						defaultMapColor='#d8d8d8'
						dataMapZones={{
							krasnoyarsk: '#00308F',
							shushenskij_rajon: '#407FFE',
							ermakovskij_rajon: '#407FFE',
							sharypovskij_rajon: '#d9e6fc',
							emeljanovskij_rajon: '#d9e6fc',
							minusinskij_rajon: '#d9e6fc',
							krasnoturanskij_rajon: '#d9e6fc',
							kuraginskij_rajon: '#d9e6fc',
							evenkiyskiy: '#d9e6fc',
							tajmyrskaja: '#d9e6fc',
							dzerzhinskij_rajon: '#d9e6fc',
						}}
						legend={[
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
							{
								name: 'Нет данных',
								color: '#d8d8d8',
							},
						]}
					/>
				</Content>
				<Content title='Частота путешествий по Красноярскому краю'>
					<HorizontalStacked height={370} data={data[17]} />
				</Content>
				<Content
					title='Рейтинг ограничивающих факторов при выборе Красноярского края как места отдыха'
					tooltip='*Доля респондентов,  назвавших фактор'>
					<HorizontalGraphic height={400} data={data[18]} />
				</Content>
			</ContentBox>

			<ContentBox title='4. Реализованный спрос на туристические услуги Красноярского края'>
				<Content
					title='Топ-10 по популярности мест отдыха в Красноярском крае'
					tooltip='*Доля респондентов,  назвавших регион привлекательным для путешествия'>
					<HorizontalGraphic height={400} data={data[19]} />
				</Content>
				<Content title='Структура затрат на отдых, в зависимости от дохода потребителей'>
					<VerticalStacked height={300} data={data[20]} />
				</Content>
				<Content title='Структура туристов в зависимости от заинтересованности в услугах турагентов при путешествии по Красноярскому краю'>
					<div className='pie_container'>
						<PieGraphic
							height={220}
							title='Длительный отпуск (более 7 дней)'
							data={data[21]}
						/>
						<PieGraphic
							height={220}
							title='Праздничные дни (1-6 дней особое событие)'
							data={data[22]}
						/>
						<PieGraphic
							height={220}
							title='Поездка на weekend (1-2 дня)'
							data={data[23]}
						/>
						<PieGraphic
							height={220}
							title='Поездка в течение дня (2-5 часов)'
							data={data[24]}
						/>
					</div>

					<div className='custom__legend-list'>
						{data[24]?.map((item, i) => (
							<div className='custom__legend-list-item'>
								<div>
									<svg
										width='14'
										height='10'
										viewBox='0 0 14 10'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M0 9.5C1.41941e-07 7.81158 0.456717 6.15721 1.31797 4.72592C2.17922 3.29462 3.41027 2.14413 4.87045 1.40589C6.33064 0.66765 7.96108 0.37144 9.57547 0.551103C11.1899 0.730766 12.7231 1.37906 14 2.4219L8.65455 9.5L0 9.5Z'
											fill={COLORS[i]}
										/>
									</svg>
								</div>
								<div>{item.name}</div>
							</div>
						))}
					</div>
				</Content>
				<Content title='Структура туристов в зависимости от намерений совершать в дальнейшем путешествия по Красноярскому краю'>
					<div className='pie__legend'>
						<PieGraphic
							height={400}
							legend={<CustomLegend type='list' />}
							data={data[25]}
							legendY='middle'
						/>
					</div>
				</Content>
			</ContentBox>
			<ContentBox
				className='lastContentBox'
				title='5. Уровень удовлетворенности туристов качеством отдыха в Красноярском крае'>
				<Content title='Важность элементов туристкой инфраструктуры  и степень удовлетворенности ими'>
					<CompousedHorizontal data={data[26]} />
				</Content>
				<Content title='Структура туристов в зависимости от вероятности рекомендаций отдыха в Красноярском крае'>
					<Line data={data[27]} />
				</Content>
				<Content title='Индекс чистых сторонников по сегментам'>
					<VerticalGraphic data={data[28]} />
				</Content>
			</ContentBox>
		</div>
	)
}

export default PoolResult
