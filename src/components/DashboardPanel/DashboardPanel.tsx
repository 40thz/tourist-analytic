import Logo from '@components/Logo/Logo'
import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import DashboardList from './DashboardList/DashboardList'

const DashboardPanel = () => {
	const [active, setActive] = React.useState<boolean | any>(true)

	const togglePanel = () => {
		setActive(!active)
	}
	return (
		<div style={{ height: 'auto' }}>
			<div className={cn('dashboardpanel', { active })}>
				<div style={{ padding: '65px 65px 0 65px' }}>
					<Link to={'/'} className='dashboardpanel-logo'>
						<Logo />
					</Link>

					<DashboardList
						items={[
							{
								name: 'Сводный отчет',
								icon: (
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7Z'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								),
								href: '/report',
							},
							{
								name: 'Портрет туриста',
								icon: (
									<svg
										width='24'
										height='25'
										viewBox='0 0 24 25'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M20 21.5C20 20.1044 20 19.4067 19.8278 18.8389C19.44 17.5605 18.4395 16.56 17.1611 16.1722C16.5933 16 15.8956 16 14.5 16H9.5C8.10444 16 7.40665 16 6.83886 16.1722C5.56045 16.56 4.56004 17.5605 4.17224 18.8389C4 19.4067 4 20.1044 4 21.5M16.5 8C16.5 10.4853 14.4853 12.5 12 12.5C9.51472 12.5 7.5 10.4853 7.5 8C7.5 5.51472 9.51472 3.5 12 3.5C14.4853 3.5 16.5 5.51472 16.5 8Z'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								),
								href: '/audience',
							},
							{
								name: 'Результаты опроса',
								icon: (
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M16 4C16.93 4 17.395 4 17.7765 4.10222C18.8117 4.37962 19.6204 5.18827 19.8978 6.22354C20 6.60504 20 7.07003 20 8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V8C4 7.07003 4 6.60504 4.10222 6.22354C4.37962 5.18827 5.18827 4.37962 6.22354 4.10222C6.60504 4 7.07003 4 8 4M9 15L11 17L15.5 12.5M9.6 6H14.4C14.9601 6 15.2401 6 15.454 5.89101C15.6422 5.79513 15.7951 5.64215 15.891 5.45399C16 5.24008 16 4.96005 16 4.4V3.6C16 3.03995 16 2.75992 15.891 2.54601C15.7951 2.35785 15.6422 2.20487 15.454 2.10899C15.2401 2 14.9601 2 14.4 2H9.6C9.03995 2 8.75992 2 8.54601 2.10899C8.35785 2.20487 8.20487 2.35785 8.10899 2.54601C8 2.75992 8 3.03995 8 3.6V4.4C8 4.96005 8 5.24008 8.10899 5.45399C8.20487 5.64215 8.35785 5.79513 8.54601 5.89101C8.75992 6 9.03995 6 9.6 6Z'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								),
								href: '/poolresults',
							},
							{
								name: 'Официальная статистика',
								icon: (
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M8 15V17M12 11V17M16 7V17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								),
								href: '/officalstat',
							},
							{
								name: 'Статистика по локациям',
								icon: (
									<svg
										width='24'
										height='25'
										viewBox='0 0 24 25'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M12 22.5C16 18.5 20 14.9183 20 10.5C20 6.08172 16.4183 2.5 12 2.5C7.58172 2.5 4 6.08172 4 10.5C4 14.9183 8 18.5 12 22.5Z'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								),
								href: '/statistics',
							},
						]}
					/>
				</div>

				<div onClick={togglePanel} className='dashboardpanel-toggle'>
					<div className='dashboardpanel-toggle-icon'>
						<svg
							width='18'
							height='16'
							viewBox='0 0 14 13'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M13 11.5L8 6.5L13 1.5M6 11.5L1 6.5L6 1.5'
								stroke='#439AEA'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<div className='dashboardpanel-toggle-name'>
						Свернуть боковое меню
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashboardPanel
