import React from 'react'
import Title from '@components/Title/Title'
import { IContent } from '../Content/Content'
import cn from 'classnames'

interface IContentBox extends IContent {
	savedSection?: any
}

const ContentBox = ({
	title,
	children,
	className,
	savedSection,
}: IContentBox) => {
	return (
		<div className={cn('content-box', className)}>
			{title && savedSection ? (
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Title value={title} />
					{savedSection}
				</div>
			) : (
				title && <Title value={title} />
			)}
			<div className='poolresults__content-box'>{children}</div>
		</div>
	)
}

export default ContentBox
