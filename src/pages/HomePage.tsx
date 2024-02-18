import React from 'react'
import bgHome from '@images/Homepage/bg.png'
import comapny from '@images/Homepage/Company/sfu.png'
import comapny2 from '@images/Homepage/Company/turism.png'
import comapny3 from '@images/Homepage/Company/turism2.png'
import comapny4 from '@images/Homepage/Company/turism3.png'
import comapny5 from '@images/Homepage/Company/gang.png'

const HomePage = () => {
	return (
		<section style={{ backgroundImage: `url(${bgHome})` }} id='homepage'>
			<div className='homepage-container'>
				<div className='homepage-title'>
					Мониторинг состояния и оценка потенциала развития туристской отрасли
					Красноярского края
				</div>

				<div className='homepage-subtitle'>
					Информационно-аналитическая модель для подготовки стратегических
					управленческих решений
				</div>
			</div>

			<div className='homepage-author-container'>
				<div className='homepage-author'>
					<div className='homepage-author-item'>
						<img src={comapny} alt='' />
					</div>
					<div className='homepage-author-item'>
						<img src={comapny2} alt='' />
					</div>
					<div className='homepage-author-item'>
						<img src={comapny3} alt='' />
					</div>
					<div className='homepage-author-item'>
						<img src={comapny4} alt='' />
					</div>
					<div className='homepage-author-item'>
						<img src={comapny5} alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomePage
