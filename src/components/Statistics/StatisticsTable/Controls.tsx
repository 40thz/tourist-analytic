import React from 'react'

interface IProps {
	setTab: (params: number) => void
	activeTab: number
}

const controlsProp = ['По локациям', 'Общее', 'По дням']

const Controls = (props: IProps) => {
	return (
		<div className='statistics__table-controls'>
			{controlsProp.map((item, i) => (
				<button
					disabled={props.activeTab === i}
					onClick={() => props.setTab(i)}
					className='statistics__table-controls-btn'>
					{item}
				</button>
			))}
		</div>
	)
}

export default Controls
