import CustomSelector from '@components/CustomSelector/CustomSelector'
import { useAction } from '@hooks/useActions'
import React from 'react'

const Age = () => {
	const { setData } = useAction()

	const generateArrayOptions = (prefix: string) => {
		return Array.apply(null, Array(68)).map((item, i) => {
			if (i === 0) {
				return {
					name: `Любой`,
					id: i,
				}
			} else {
				return {
					name: `${prefix} ${i + 13}`,
					id: i + 13,
				}
			}
		})
	}

	return (
		<div>
			<div className='age__container'>
				<div className='audience__selector'>
					<div className='audience__selector-title'>Возраст</div>
					<CustomSelector
						onChange={value => setData({ age_from: value.id })}
						options={generateArrayOptions('От')}
						placeholder='От'
						isSearchable={false}
					/>
				</div>

				<div className='audience__selector'>
					<div className='audience__selector-title'></div>
					<CustomSelector
						onChange={value => setData({ age_to: value.id })}
						options={generateArrayOptions('До')}
						placeholder='До'
						isSearchable={false}
					/>
				</div>
			</div>
		</div>
	)
}

export default Age
