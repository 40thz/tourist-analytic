import React from 'react'
import { CheckboxGroup, Checkbox } from '@createnl/grouped-checkboxes'
import { useAction } from 'src/hooks/useActions'
import Tooltip from '@components/Tooltip/Tooltip'

const Travellers = () => {
	const { setData } = useAction()

	const changeHandler = (value: any) => {
		setData({
			travellers: value[0]?.checked ? 1 : 0,
		})
	}
	return (
		<div className='travellers__container'>
			<CheckboxGroup onChange={changeHandler}>
				<label className='label inputContainer'>
					<Checkbox className='checkbox' onChange={changeHandler} />
					<div className='travellers-box'>
						<div className='checkboxLabel'>
							<div className='checkboxLabel-checked'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M9.99997 15.586L6.70697 12.293L5.29297 13.707L9.99997 18.414L19.707 8.70697L18.293 7.29297L9.99997 15.586Z'
										fill='#fff'
									/>
								</svg>
							</div>
						</div>
						<span>Путешественники</span>
					</div>
					<Tooltip text='Данная настройка охватывает всех пользователей ВКонтакте, действия которых алгоритмы социальной сети распознает как поведение  туристов. В эту категорию попадают как деловые люди, которые приезжают на время командировок, так и люди, которые путешествуют с туристическими целями.' />
				</label>
			</CheckboxGroup>
		</div>
	)
}

export default Travellers
