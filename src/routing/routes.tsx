import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import ProtectedRoute from './ProtectedRoute'

import HomePage from '@pages/HomePage'
import StatisticPage from '@pages/StatisticPage'
import AudiencePage from '@pages/AudiencePage'
import PoolResult from '@pages/PoolResults'
import AuthPage from '@pages/AuthPage'
import Officalstat from '@pages/Officalstat'
import ReportPage from '@pages/ReportPage'
import Map from '@components/MapContainer/MapContainer'

export const useRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/statistics' element={<StatisticPage />} />
					<Route path='/audience' element={<AudiencePage />} />
					<Route path='/poolresults' element={<PoolResult />} />
					<Route path='/officalstat' element={<Officalstat />} />
					<Route path='/report' element={<ReportPage />} />

					<Route path='*' element={<div>NotFound</div>} />
				</Route>
				<Route
					path='/auth'
					element={<ProtectedRoute component={<AuthPage />} />}
				/>
			</Routes>
		</>
	)
}
