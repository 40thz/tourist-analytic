import React from 'react'

import CountUp from 'react-countup'
import cn from 'classnames'

import { IStatItem } from './StatisticsLocation'
import { useQuery } from 'react-query'
import { WordstatService } from '@service/wordstat.api'
import { useAction } from '@hooks/useActions'
import { useTypedSelector } from '@hooks/useTypedSelector'
import useOnClickOutside from '@hooks/useOnClickOutside'

const StatisticsPhrases = (props: IStatItem) => {
	const { setStatistics } = useAction()

	const [active, setActive] = React.useState(false)

	const refPhrase = React.useRef<HTMLDivElement>(null)

	useOnClickOutside(
		refPhrase,
		() => setActive(false),
		'.statistics__table-body'
	)

	const { refetch } = useQuery(
		['statistics list by phrase', props.value],
		() => WordstatService.getPhraseStatistics(props.value),

		{
			onSuccess(data) {
				setStatistics({ ...data.data })
			},

			enabled: false,
		}
	)

	const clickHandler = async () => {
		setActive(true)
		refetch()
	}

	return (
		<div
			ref={refPhrase}
			onClick={clickHandler}
			className={cn('statistic-item phrase', {
				active: active,
			})}>
			<div className='statistic-item-icon'>
				<svg
					width='14'
					height='14'
					viewBox='0 0 14 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g filter='url(#filter0_i_75_240)'>
						<rect
							x='0.5'
							y='0.5'
							width='13'
							height='13'
							rx='6.5'
							stroke='#C0C3CA'
						/>
					</g>
					<defs>
						<filter
							id='filter0_i_75_240'
							x='0'
							y='0'
							width='14'
							height='15'
							filterUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'>
							<feFlood floodOpacity='0' result='BackgroundImageFix' />
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='BackgroundImageFix'
								result='shape'
							/>
							<feColorMatrix
								in='SourceAlpha'
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
								result='hardAlpha'
							/>
							<feOffset dy='1' />
							<feGaussianBlur stdDeviation='1' />
							<feComposite
								in2='hardAlpha'
								operator='arithmetic'
								k2='-1'
								k3='1'
							/>
							<feColorMatrix
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'
							/>
							<feBlend
								mode='normal'
								in2='shape'
								result='effect1_innerShadow_75_240'
							/>
						</filter>
					</defs>
				</svg>
			</div>
			<div className='statistic-item-name'>{props.value}</div>
			<div className='statistic-item-count'>
				<CountUp separator={' '} duration={1} start={0} end={props.count} />
			</div>
		</div>
	)
}

export default StatisticsPhrases
