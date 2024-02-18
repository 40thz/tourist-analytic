import React from 'react'

import CustomSelector from '@components/CustomSelector/CustomSelector'

import { AudienceService, ICountry } from '@service/audience.api'
import { useQuery } from 'react-query'
import { useAction } from 'src/hooks/useActions'
import Tooltip from '@components/Tooltip/Tooltip'

const Interests = () => {
	const { data: response } = useQuery('interests_list', () =>
		AudienceService.getInterest()
	)

	const [selectedInerests, setInerests] = React.useState<any>({
		interes: null,
		including: null,
		excluding: null,
	})

	const [includingSelect, setIncluding] = React.useState<any>()

	const { setData } = useAction()

	React.useEffect(() => {
		const formula: string[] = [
			selectedInerests.interes,
			selectedInerests.including,
			selectedInerests.excluding,
		]

		const formulaFilter = formula.filter(element => element != null)

		setData({
			interest_categories_formula: formulaFilter.join('%26'),
		})
	}, [selectedInerests])

	const stringFormater = (array: readonly ICountry[], excluding?: boolean) => {
		const arrayOnlyIds = array.map(item => item.id)
		if (arrayOnlyIds.length > 1) {
			if (excluding) return `!(${arrayOnlyIds.join('|')})`
			return `(${arrayOnlyIds.join('|')})`
		} else if (!arrayOnlyIds.length) {
			return null
		} else {
			if (excluding) return `!${arrayOnlyIds[0]}`
			return `${arrayOnlyIds[0]}`
		}
	}

	const changeInteres = (array: readonly ICountry[]) => {
		const string = stringFormater(array)
		if (!array.length) setTimeout(() => includingSelect.clearValue(), 0.1)
		setInerests({ ...selectedInerests, interes: string })
	}

	const changeIncluding = (array: readonly ICountry[]) => {
		const string = stringFormater(array)

		console.log(`%26${string}`)
		setInerests({ ...selectedInerests, including: string })
	}

	const changeExcluding = (array: readonly ICountry[]) => {
		const string = stringFormater(array, true)

		setInerests({ ...selectedInerests, excluding: string })
	}

	return (
		<section id='interests'>
			<h2 className='audience__title'>Интересы</h2>
			<div className='audience__container'>
				<div className='audience__container'>
					<div className='audience__selector'>
						<div
							style={{ display: 'flex', justifyContent: 'space-between' }}
							className='audience__selector-title'>
							<div>Интересы</div>
							<div>
								<Tooltip text='Неизменяемый параметр' />
							</div>
						</div>
						<CustomSelector
							onChange={changeInteres}
							options={response?.data}
							isMulti={true}
							defaultValue={{ id: 0, name: 'Путешествуют по России' }}
							isDisabled={true}
						/>
					</div>

					<div className='audience__selector'>
						<div className='audience__selector-title'>В том числе</div>
						<CustomSelector
							onChange={changeIncluding}
							options={response?.data}
							isMulti={true}
							refFunc={setIncluding}
						/>
					</div>

					<div className='audience__selector'>
						<div className='audience__selector-title'>Исключая интересы</div>
						<CustomSelector
							onChange={changeExcluding}
							options={response?.data}
							isMulti={true}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Interests
