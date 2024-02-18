import CustomSelector from '@components/CustomSelector/CustomSelector'
import FileUploader from '@components/FileUploader/FileUploader'
import Content from '@components/PoolResults/Content/Content'
import ContentBox from '@components/PoolResults/ContentBox/ContentBox'
import Protect from '@components/Protect'
import GraphicMatrix from '@components/ReportPage/GraphicMatrix/GraphicMatrix'
import MapOne from '@components/ReportPage/MapOne/MapOne'
import MapTwo from '@components/ReportPage/MapTwo/MapTwo'
import RadialChart from '@components/ReportPage/RadialChart/RadialChart'
import Title from '@components/Title/Title'
import { AudienceService } from '@service/audience.api'
import { GraphicService } from '@service/graphics.api'
import { WordstatService } from '@service/wordstat.api'
import { readExcelFile } from '@utils/readExcelFile'
import React, { ChangeEvent } from 'react'
import { useQuery } from 'react-query'
import { reportData } from 'src/constants/reportarr'
import { useAction } from '../hooks/useActions'

const ReportPage = () => {
	const [data, setData] = React.useState<{ name: string; count: number }[][]>(
		[]
	)
	const dataGraphic: any[] = []

	const {} = useQuery(
		'getgraphicreport',
		() => GraphicService.getGraphic('Сводный отчет'),
		{
			onSuccess({ data }: any) {
				setData(data.data)
			},
		}
	)

	const { refetch } = useQuery(
		['updategraphicreport', dataGraphic],
		() => GraphicService.updateGraphic('Сводный отчет', dataGraphic),
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

	const dataGraphicMatrix: any = {
		mapTwo: data[14],
		graphic1: data[0],
		graphic2: data[1],
		graphic3: data[2],
	}

	const [totalKrsk, setTotalKrsk] = React.useState(0)

	const [currentCity, setCity] = React.useState<any>()
	const { data: response } = useQuery(['cities list russia ', 1], () =>
		AudienceService.getCities(1)
	)

	const {} = useQuery(
		['regionswordstat '],
		() => WordstatService.getRegions(),
		{
			onSuccess: ({ data }: { data: any }) => {
				const onlyShows = data.map((item: any) => item.shows)

				const initialValue = 0
				const sumWithInitial = onlyShows.reduce(
					(previousValue: number, currentValue: number) =>
						previousValue + currentValue,
					initialValue
				)

				setTotalKrsk(sumWithInitial)
			},
		}
	)

	let id: any = ''
	const { data: responseCounter } = useQuery(
		['getcounterrr'],
		() =>
			AudienceService.getCounter({
				data: {
					country: 0,
					cities: '0',
					cities_not: '',
					sex: 0,
					age_from: 0,
					age_to: 0,
					statuses: '',
					interest_categories_formula: '',
					travellers: 0,
				},
			}),
		{
			onSuccess: ({ data }: { data: any }) => {
				console.log(data.potentialData.audience_count)
			},
		}
	)

	const { data: counterCounter, refetch: audienceRefetch } = useQuery(
		['getcount12312errr'],
		() =>
			AudienceService.getCounter({
				data: {
					country: 0,
					cities: id,
					cities_not: '',
					sex: 0,
					age_from: 0,
					age_to: 0,
					statuses: '',
					interest_categories_formula: '',
					travellers: 0,
				},
			}),
		{
			enabled: false,
		}
	)
	const handleeChange = (item: { id: number; name: string }) => {
		id = item.id
		setCity(item)
		audienceRefetch()
	}
	return (
		<section id='reportpage'>
			<Title value='Сводный отчет' />
			<ContentBox
				title='1. Соотношение данных опроса и статистики о потенциале и фактическом развитии видов туризма в разрезе муниципальных образований Красноярского края'
				savedSection={
					<Protect>
						<FileUploader
							src='/Сводный отчет.xlsm'
							type='download'
							onChange={handleChange}
						/>
						<FileUploader type='upload' onChange={handleChange} />
					</Protect>
				}>
				<Content title='Привлекательность территорий Красноярского края по результатам опроса в разрезе видов туризма'>
					<MapOne data={data} />
				</Content>
				<Content title='Реализуемые виды отдыха в районах Красноярского края по данным статистики'>
					<MapTwo data={dataGraphicMatrix.mapTwo} />
				</Content>
			</ContentBox>
			<ContentBox title='2. Соотношение проявленного интереса к отдыху и факта посещения Красноярского края'>
				<Content className='options'>
					<div className='report__options'>
						<CustomSelector
							placeholder='Выберите город'
							isSearchable={false}
							onChange={handleeChange}
							options={response?.data}
						/>
					</div>
				</Content>
				<Content
					className='content2fr'
					title='Запросы на  путешествие по территории Красноярского края'>
					<RadialChart currentCity={currentCity} totalKrsk={totalKrsk} />
					<div className='pie__legend'>
						<div className='custom__legend-list'>
							<div
								style={{ display: 'flex' }}
								className='custom__legend-list-item'>
								<div>
									<svg
										className='recharts-surface'
										width='10'
										height='10'
										viewBox='0 0 32 32'
										version='1.1'
										style={{
											display: 'inline-block',
											verticalAlign: 'middle',
											marginRight: '4px',
										}}>
										<title></title>
										<desc></desc>
										<path
											fill='rgb(106, 197, 126)'
											cx='16'
											cy='16'
											type='circle'
											className='recharts-symbols'
											transform='translate(16, 16)'
											d='M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0'></path>
									</svg>
								</div>
								<div>
									{currentCity?.name ? currentCity?.name : 'Выбранный город'}
								</div>
							</div>
							<div
								style={{ display: 'flex' }}
								className='custom__legend-list-item'>
								<div>
									<svg
										className='recharts-surface'
										width='10'
										height='10'
										viewBox='0 0 32 32'
										version='1.1'
										style={{
											display: 'inline-block',
											verticalAlign: 'middle',
											marginRight: '4px',
										}}>
										<title></title>
										<desc></desc>
										<path
											fill='#439AEA'
											cx='16'
											cy='16'
											type='circle'
											className='recharts-symbols'
											transform='translate(16, 16)'
											d='M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0'></path>
									</svg>
								</div>
								<div>Всего Красноярский край</div>
							</div>
						</div>
					</div>
				</Content>
				<Content
					className='content2fr'
					title='Число потенциальных туристов, имеющих интерес туризма по России'>
					<RadialChart
						currentCity={currentCity}
						totalCurrentCity={counterCounter?.data.potentialData.audience_count}
						totalKrsk={responseCounter?.data.potentialData.audience_count}
					/>
					<div className='pie__legend'>
						<div className='custom__legend-list'>
							<div
								style={{ display: 'flex' }}
								className='custom__legend-list-item'>
								<div>
									<svg
										className='recharts-surface'
										width='10'
										height='10'
										viewBox='0 0 32 32'
										version='1.1'
										style={{
											display: 'inline-block',
											verticalAlign: 'middle',
											marginRight: '4px',
										}}>
										<title></title>
										<desc></desc>
										<path
											fill='rgb(106, 197, 126)'
											cx='16'
											cy='16'
											type='circle'
											className='recharts-symbols'
											transform='translate(16, 16)'
											d='M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0'></path>
									</svg>
								</div>
								<div>
									{currentCity?.name ? currentCity?.name : 'Выбранный город'}
								</div>
							</div>
							<div
								style={{ display: 'flex' }}
								className='custom__legend-list-item'>
								<div>
									<svg
										className='recharts-surface'
										width='10'
										height='10'
										viewBox='0 0 32 32'
										version='1.1'
										style={{
											display: 'inline-block',
											verticalAlign: 'middle',
											marginRight: '4px',
										}}>
										<title></title>
										<desc></desc>
										<path
											fill='#439AEA'
											cx='16'
											cy='16'
											type='circle'
											className='recharts-symbols'
											transform='translate(16, 16)'
											d='M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0'></path>
									</svg>
								</div>
								<div>Всего потенциальных туристов</div>
							</div>
						</div>
					</div>
				</Content>
			</ContentBox>
			<ContentBox
				className='twoToOne'
				title='3. Стратегические карты позиционирования'>
				<Content title='Карта соотношения спроса и предложения на туристские продукты по муниципальным образованиям Красноярского края'>
					<GraphicMatrix data={dataGraphicMatrix.graphic1} />
				</Content>
				<Content title='Карта позиционирования муниципальных образований Красноярского края по уровню реализации туристского потенциала и развитости инфраструктуры туризма'>
					<GraphicMatrix data={dataGraphicMatrix.graphic2} />
				</Content>
				<Content title='Карта позиционирования муниципальных образований Красноярского края в пространстве масштабов привлекающих и обеспечивающих качество пребывания факторов и факторов, ограничивающих доступность территории '>
					<GraphicMatrix data={dataGraphicMatrix.graphic3} />
				</Content>
			</ContentBox>
			<ContentBox className='onlyOne' title='4. Управленческие решения'>
				<Content title='Рекомендации по подготовке управленческих решений для развития сферы туризма в соответствии с положением на карте позиционирования '>
					<ul className='list-solutions'>
						<li>
							I. Определить вид туризма, обеспечивающий высокий спрос. Развивать
							виды туризма со схожими требованиями к туристской инфраструктуре.
							Выбрать приоритетные направления для выборочных инвестиций.
						</li>
						<li>
							II. Выявить причины высокого спроса на туристский продукт, успешно
							реализуемые виды туризма. Сопоставить с развитыми компонентами
							туристского потенциала. Инвестировать в элементы инфраструктуры
							для поддержания уровня спроса и привлечения новых целевых
							аудиторий.
						</li>
						<li>
							III. Развитие массовых видов туризма, формирование сценариев
							поведения целевых аудиторий туристов, идентификация мотивов
							путешествия и проработка соответствующей стратегии
							позиционирования на основе значимых конкурентных преимуществ и
							коммуникативной стратегии. Поддержание качества инфраструктуры на
							конкурентоспособном уровне.
						</li>
						<li>
							IV. Аудит ресурсов МО с целью выбора приоритетного развития. При
							выявлении потенциала к увеличению спроса сконцентрироваться на
							поиске новых целевых аудиторий, мероприятиях по стимулированию
							сбыта. При низкой вероятности роста спроса в данных условиях
							рассмотреть возможность инвестировать в элемент туристской
							инфраструктуры, который станет стимулом к дальнейшему увеличению
							туристского потока.
						</li>
						<li>
							V. Переосмыслить возможности использования существующей туристской
							инфраструктуры для повышения спроса, в том числе за счет новой
							целевой аудитории. При росте туристского потока рассмотреть
							возможность инвестировать в инфраструктуру МО.
						</li>
						<li>
							VI. Концептуальное переосмысление возможностей реализовать
							имеющийся потенциал. Приоритетные усилия направить на разработку
							стратегии позиционирования и коммуникативную стратегию.
						</li>
						<li>
							VII. Развитие нишевых видов туризма, когда потребители в меньшей
							степени ориентированы на факторы, обеспечивающие качество
							пребывания, но в большей степени заинтересованы в стимулирующих
							интерес факторах привлекательности территории.
						</li>
						<li>
							VIII. Поиск способов реализации имеющегося потенциала за счет
							эффективного позиционирования туристского продукта МО, выхода на
							новые целевые аудитории, повышения эффективности коммуникаций и
							мероприятий по стимулированию сбыта без значительных инвестиций в
							инфраструктуру. После перемещения в положение 5, детальная
							проработка дальнейших перспектив развития.
						</li>
						<li>
							IX. Аудит причин низкого спроса и формирование соответствующих мер
							по их устранению. Приоритетные направления аналитики: оценка
							соотношения привлекающих, обеспечивающих качество пребывания и
							ограничивающих доступность территории факторов; аудит целевых
							аудиторий, стратегии позиционирования, способов коммуникации;
							анализ относительной ценности предложения для потребителя.
						</li>
					</ul>

					<div className='text'>
						* [Раздел 3] Стратегические карты позиционирования - [График 1]
					</div>
				</Content>
			</ContentBox>
		</section>
	)
}

export default ReportPage
