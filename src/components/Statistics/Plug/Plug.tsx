import classNames from 'classnames'
import React from 'react'

const Plug = (props: { white?: boolean }) => {
	return (
		<div className='statistics__plug'>
			<div
				className={classNames('statistics__plug-title', {
					white: props.white,
				})}>
				Выберете поисковый запрос
			</div>
		</div>
	)
}

export default Plug
