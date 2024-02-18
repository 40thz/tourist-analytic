import React from 'react'

import Title from '@components/Title/Title'
import Geography from '@components/Audience/Geography/Geography'
import Demography from '@components/Audience/Demography/Demography'
import Interests from '@components/Audience/Interests/Interests'
//import Travellers from '@components/Audience/Travellers'
import Counter from '@components/Audience/Counter/Counter'

const AudiencePage = () => {
	return (
		<section id='audiencepage'>
			<Title value='Портрет туриста' />
			<div className='audiencepage__container'>
				<div className='audiencepage__top'>
					<div>
						{/* <Travellers /> */}
						<Geography />
					</div>
					<Counter />
				</div>
				<Demography />
				<Interests />
			</div>
		</section>
	)
}

export default AudiencePage
