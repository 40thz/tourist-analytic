import React from 'react'

const MapTooltip = () => {
	return (
		<div style={{ display: 'flex', gap: '5px' }}>
			<div>
				<svg
					version='1.1'
					id='Layer_1'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					x='0px'
					y='0px'
					width='10px'
					height='10px'
					viewBox='0 0 120 120'
					enable-background='new 0 0 120 120'
					xmlSpace='preserve'
					fill='red'>
					<circle cx='60' cy='60.834' r='54.167' />
				</svg>
			</div>

			<div>
				<span>text</span>
			</div>
		</div>
	)
}

export default MapTooltip
