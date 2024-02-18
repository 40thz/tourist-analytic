import { IStatistics } from './../../services/wordstat.api'
import { createSlice } from '@reduxjs/toolkit'

type wordstatState = {
	statisticPhrase: {
		name: IStatistics['name']
		data: IStatistics['data']
		regions: IStatistics['regions']
	}
}

const initialState: wordstatState = {
	statisticPhrase: {
		name: '',
		data: [],
		regions: [],
	},
}

export const wordstatSlice = createSlice({
	name: 'wordstat',
	initialState,
	reducers: {
		setStatistics: (state, action) => {
			return {
				...state,
				statisticPhrase: {
					...state.statisticPhrase,
					name: action.payload.name,
					data: action.payload.data,
					regions: action.payload.regions,
				},
			}
		},
		clearStatistics: state => {
			return {
				...state,
				statisticPhrase: {
					name: '',
					data: [],
					regions: [],
				},
			}
		},
	},
})

export const wordstatReducer = wordstatSlice.reducer
export const wordstatActions = wordstatSlice.actions
