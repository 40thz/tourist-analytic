import CountUp from 'react-countup'
import { LegendProps } from 'recharts'

interface ICustomLegend extends LegendProps {
	type?: string
	nestedName?: string
}

const CustomLegend = ({ payload, type, nestedName }: ICustomLegend) => {
	if (payload !== undefined && type === 'nested') {
		return (
			<div className='custom-legend'>
				<div>
					<svg
						style={{ marginRight: '10px' }}
						width='14'
						height='9'
						viewBox='0 0 14 9'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M0 9C1.41941e-07 7.31158 0.456717 5.65721 1.31797 4.22592C2.17922 2.79462 3.41027 1.64413 4.87045 0.90589C6.33064 0.16765 7.96108 -0.12856 9.57547 0.051103C11.1899 0.230766 12.7231 0.879056 14 1.9219L8.65455 9L0 9Z'
							fill='#439AEA'
						/>
					</svg>
					{payload[0]?.value}
				</div>
				<div className='dolya2'>
					<div style={{ marginTop: '10px', paddingBottom: '5px', display: 'flex' }}>
						<div><svg
							style={{ marginRight: '10px' }}
							width='14'
							height='9'
							viewBox='0 0 14 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M8.64286 9L9.5 0H15.5L8.64286 9Z' fill='#F5E265' />
							<path d='M8.66667 9L0.5 4.5L4 -0.5L8.66667 9Z' fill='#B595C5' />
							<path d='M9.5 0L4 -0.5L8.64286 9L9.5 0Z' fill='#F18C8A' />
							<path d='M8.66406 9H-1L0.5 3.5L8.66406 9Z' fill='#6AC57E' />
						</svg></div>
						<div>{nestedName}</div>
					</div>
					<div>
						{payload.map((item, i) => {
							if (i != 0) {
								return (
									<div className='segment' style={{ marginLeft: '15px', display: 'flex' }}>
										<div>
											<svg
												style={{ marginRight: '10px' }}
												width='14'
												height='9'
												viewBox='0 0 14 9'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M0 9C1.41941e-07 7.31158 0.456717 5.65721 1.31797 4.22592C2.17922 2.79462 3.41027 1.64413 4.87045 0.90589C6.33064 0.16765 7.96108 -0.12856 9.57547 0.051103C11.1899 0.230766 12.7231 0.879056 14 1.9219L8.65455 9L0 9Z'
													fill={item.color}
												/>
											</svg>
										</div>
										<div>{item.value}</div>
									</div>
								)
							}
						})}
					</div>
				</div>
			</div>
		)
	} else if (payload !== undefined && type === 'list') {
		return (
			<div className='custom__legend-list'>
				{payload.map(item => (
					<div style={{display: 'flex'}} className='custom__legend-list-item'>
						<div>	<svg
							width='14'
							height='10'
							viewBox='0 0 14 10'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M0 9.5C1.41941e-07 7.81158 0.456717 6.15721 1.31797 4.72592C2.17922 3.29462 3.41027 2.14413 4.87045 1.40589C6.33064 0.66765 7.96108 0.37144 9.57547 0.551103C11.1899 0.730766 12.7231 1.37906 14 2.4219L8.65455 9.5L0 9.5Z'
								fill={item.color}
							/>
						</svg></div>
						<div>	{item.value}</div>
					</div>
				))}
			</div>
		)
	} else if (payload !== undefined && !type) {
		return (
			<div className='custom__legend-list'>
				{payload.map(item => (
					<div style={{display: 'flex'}}>
					<div>	<svg
							width='14'
							height='10'
							viewBox='0 0 14 10'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M0 9.5C1.41941e-07 7.81158 0.456717 6.15721 1.31797 4.72592C2.17922 3.29462 3.41027 2.14413 4.87045 1.40589C6.33064 0.66765 7.96108 0.37144 9.57547 0.551103C11.1899 0.730766 12.7231 1.37906 14 2.4219L8.65455 9.5L0 9.5Z'
								fill={item.color}
							/>
						</svg></div>
						<div>{item.value}</div>
					</div>
				))}
			</div>
		)
	} else {
		return null
	}
}

export default CustomLegend
