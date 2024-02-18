import React from 'react'

import { NavLink } from 'react-router-dom'

type Props = {
	items: {
		name: string
		href: string
		icon: JSX.Element
	}[]
}

const DashboardList = ({ items }: Props) => {
	return (
		<nav className='dashboardpanel-list'>
			{items.map((item, i) => (
				<NavLink
					key={i}
					to={item.href}
					className={({ isActive }) =>
						isActive
							? 'dashboardpanel-list-link active'
							: 'dashboardpanel-list-link'
					}>
					<div className='dashboardpanel-list-link-icon'>{item.icon}</div>
					<div className='dashboardpanel-list-link-name'>{item.name}</div>
				</NavLink>
			))}
		</nav>
	)
}

export default DashboardList
