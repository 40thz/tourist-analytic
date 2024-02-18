import React, { ChangeEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useAction } from 'src/hooks/useActions'
import { IOptionSelect } from '@components/CustomSelector/CustomSelector'

export interface IGender {
	items: IOptionSelect[]
}

const Gender = ({ items }: IGender) => {
	const { setData } = useAction()

	const [currentCheck, setCheck] = React.useState<number>(0)

	const hanlderChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
		setCheck(index)
		setData({
			sex: parseInt(e.target.value),
		})
	}

	return (
		<div>
			<div className='audience__selector-title'>Пол</div>
			<div className='inputContainer'>
				{items.map((item, i) => (
					<div key={uuidv4()}>
						<label className='label'>
							<input
								className='checkbox'
								onChange={e => hanlderChange(e, i)}
								checked={currentCheck === i}
								value={item.id}
								type='checkbox'
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
							<span>{item.name}</span>
						</label>
					</div>
				))}
			</div>
		</div>
	)
}

export default Gender
