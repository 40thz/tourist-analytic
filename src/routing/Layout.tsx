import DashboardPanel from '@components/DashboardPanel/DashboardPanel'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<section id='dashboard'>
				<DashboardPanel />
				<div className='dashboard__inside'>
					<Outlet />
				</div>
			</section>
		</>
	)
}

export default Layout
