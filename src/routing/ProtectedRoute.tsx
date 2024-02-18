import { FC } from 'react'

import { Navigate } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth'

interface IPRoute {
	component: FC
}

const PrivateRoute: any = ({ component }: IPRoute) => {
	const { isAuth } = useAuth()

	return isAuth ? <Navigate to='/' /> : component
}

export default PrivateRoute
