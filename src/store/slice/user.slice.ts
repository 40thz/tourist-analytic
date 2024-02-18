import { createSlice } from '@reduxjs/toolkit'

interface IUserSlice {
	isAuth: boolean
	login: string
	name: string
	lastName: string
}

const initialState: IUserSlice = {
	isAuth: false,
	login: '',
	name: '',
	lastName: '',
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signIn: (state, action) => {
			return {
				...state,
				...action.payload,
			}
		},

		logout: state => {
			localStorage.removeItem('token')
			return {
				...state,
				isAuth: false,
				login: '',
				name: '',
				lastName: '',
			}
		},
		// removeLoader: (state, action) => {
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 	}
		// },
	},
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
