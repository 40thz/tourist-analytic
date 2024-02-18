import React from 'react'
import cn from 'classnames'
import Tooltip from '@components/Tooltip/Tooltip'

export interface IContent {
	title?: string
	children: React.ReactNode
	className?: string
	tooltip?: string
}
const Content = ({ title, children, className, tooltip }: IContent) => {
	return (
		<div className={cn('poolresults__content', className)}>
			<div className='poolresults__content-title'>
				<div>{title}</div>
				{tooltip && <Tooltip text={tooltip} />}
			</div>
			<div className='poolresults__content-body'>{children}</div>
		</div>
	)
}

export default Content
