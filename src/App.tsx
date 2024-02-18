import React from 'react'

import { useRoutes } from '@routing/routes'
import { useLocation } from 'react-router-dom'
import { useAction } from './hooks/useActions'
import { ToastContainer } from 'react-toastify'
import { UserService } from '@service/auth.api'
import { useQuery } from 'react-query'

import jwtDecode from 'jwt-decode'
import { IUser } from '@service/types'

function App() {
	const routes = useRoutes()
	const location = useLocation()
	const { clearCounter, logout, signIn, clearStatistics } = useAction()

	const { refetch } = useQuery('check token', () => UserService.check(), {
		retry: false,
		enabled: false,
		onError() {
			logout()
			localStorage.removeItem('token')
		},
		onSuccess() {
			const accessToken: string | any = localStorage.getItem('token')
			const decodeData: IUser = jwtDecode(accessToken)

			signIn({
				login: decodeData.login,
				name: decodeData.name,
				lastName: decodeData.lastName,
				isAuth: true,
			})
		},
	})

	React.useLayoutEffect(() => {
		clearCounter()
		clearStatistics()
	}, [location.pathname])

	React.useEffect(() => {
		const tokenIsExist = localStorage.getItem('token')

		if (tokenIsExist) refetch()
	}, [])

	return (
		<div>
			<div className='App'>{routes}</div>
			<ToastContainer />
		</div>
	)
}

export default App
