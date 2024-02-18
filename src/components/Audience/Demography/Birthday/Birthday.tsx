import React from 'react'
import {
	AllCheckerCheckbox,
	Checkbox,
	CheckboxGroup,
} from '@createnl/grouped-checkboxes'
import { useAction } from 'src/hooks/useActions'

//import Checkbox from '../Checkbox/Checkbox'

const Birthday = () => {
	const { setData } = useAction()
	const [week, setWeek] = React.useState(false)

	const onCheckboxChange = (checkboxes: any) => {
		const data = checkboxes.filter((item: any) => item.checked === true)

		if (week) {
			setData({
				birthday: 4,
			})
		} else if (data.length === 1) {
			setData({
				birthday: data[0].value,
			})
		} else if (data.length === 2) {
			setData({
				birthday: data[0].value + data[1].value,
			})
		} else {
			setData({
				birthday: 0,
			})
		}
	}

	return (
		<div>
			<div className='audience__selector-title'>День рождения</div>
			<div className='inputContainer'>
				<CheckboxGroup onChange={onCheckboxChange}>
					<label className='label'>
						<Checkbox className='checkbox' value={1} />
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
						<span>Сегодня</span>
					</label>
					<label className='label'>
						<Checkbox className='checkbox' value={2} />
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
						<span>Завтра</span>
					</label>
					<label style={{ display: 'none' }}>
						<Checkbox value='2' />
						Завтра
					</label>
					<label className='label'>
						<AllCheckerCheckbox
							className='checkbox'
							onClick={() => setWeek(!week)}
						/>
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
						<span>В течение недели</span>
					</label>
				</CheckboxGroup>
			</div>
		</div>
	)
}

export default Birthday
