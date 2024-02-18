import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Locations = {
	id: number
	name: string
}

type LocationState = {
	counters: {
		isLoading: boolean
		actualCounter: number
		potentialCounter: number
	}
	geography: {
		cities: Locations[]
	}
	data: {
		country: number
		cities: string
		cities_not: string
		sex: number
		age_from: number
		age_to: number
		// birthday: number
		statuses: string
		interest_categories_formula: string
		//travellers: number
	}
}

const initialState: LocationState = {
	counters: {
		isLoading: true,
		actualCounter: 0,
		potentialCounter: 0,
	},
	geography: {
		cities: [],
	},
	data: {
		country: 0,
		cities: '',
		cities_not: '',
		sex: 0,
		age_from: 0,
		age_to: 0,
		//birthday: 0,
		statuses: '',
		interest_categories_formula: '',
		//travellers: 0,
	},
}

export const audienceSlice = createSlice({
	name: 'audience',
	initialState,
	reducers: {
		setCities: (state, action) => {
			return {
				...state,
				geography: {
					cities: action.payload,
				},
			}
		},

		setData: (state, action) => {
			return {
				...state,
				data: { ...state.data, ...action.payload },
			}
		},

		setCounter: (state, action) => {
			return {
				...state,
				counters: {
					...state.counters,
					isLoading: action.payload.isLoading,
					actualCounter: action.payload.actualCounter,
					potentialCounter: action.payload.potentialCounter,
				},
			}
		},

		clearCounter: (state, action: PayloadAction) => {
			return {
				...state,
				data: {
					country: 0,
					cities: '',
					cities_not: '',
					sex: 0,
					age_from: 0,
					age_to: 0,
					//birthday: 0,
					statuses: '',
					interest_categories_formula: '',
					travellers: 0,
				},
			}
		},
	},
})

export const audienceReducer = audienceSlice.reducer
export const audienceActions = audienceSlice.actions
