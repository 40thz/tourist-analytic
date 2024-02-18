import { configureStore } from '@reduxjs/toolkit'
import { wordstatReducer } from './slice/wordstat.slice'
import { audienceReducer } from './slice/audience.slice'
import { userReducer } from './slice/user.slice'

export const store = configureStore({
	reducer: {
		wordstat: wordstatReducer,
		audience: audienceReducer,
		user: userReducer,
	},
	devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
