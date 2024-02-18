import React from 'react'

import Age from './Age/Age'
import Gender from './Gender/Gender'
import CustomSelector from '@components/CustomSelector/CustomSelector'

import { concatenateStrings } from 'src/utils/concatenateStrings'
import { familyStatus, gender } from 'src/constants/demography'
import { useAction } from '@hooks/useActions'

const Demography = () => {
	const { setData } = useAction()

	return (
		<section id='demography'>
			<h2 className='audience__title'>Демография</h2>
			<div className='row-df'>
				<Gender items={gender} />
				<Age />
				<div className='audience__selector'>
					<div className='audience__selector-title'>Семейное положение</div>
					<CustomSelector
						placeholder='Выбрать'
						options={familyStatus}
						isMulti
						onChange={array => setData({ statuses: concatenateStrings(array) })}
					/>
				</div>
			</div>
			{/* <Birthday /> */}
		</section>
	)
}

export default Demography
