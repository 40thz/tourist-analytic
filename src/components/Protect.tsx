import { useAuth } from '@hooks/useAuth'
import React from 'react'

interface IStatItem {
	children: React.ReactNode
}

const Protect = ({ children }: IStatItem) => {
	const { isAuth } = useAuth()
	return (
		<div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
			{isAuth && children}
		</div>
	)
}

export default Protect
