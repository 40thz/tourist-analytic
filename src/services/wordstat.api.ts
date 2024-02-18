import axios from 'axios'

const API_URL = 'api/'

axios.defaults.baseURL = API_URL

export interface IRegions {
	_id: string
	name: string
	shows: number
	general: boolean
}

interface ILocation extends IRegions {
	region: string
}

export interface IPhrase extends ILocation {
	location: string
	frequency?: boolean | number
}

export interface IData {
	name: string
	fyear: number
	lyear: number
}

export interface IStatistics {
	_id?: string
	name?: string
	data: IData[]
	regions: {
		name: string
		shows: number
	}[]
}

export const WordstatService = {
	async getRegions() {
		return axios.get<IRegions[]>('/wordstat/regions')
	},

	async getLocations(city: string) {
		return axios.get<ILocation[]>(`/wordstat/locations/${city}`)
	},

	async getPhrases(location: string) {
		return axios.get<IPhrase[]>(`/wordstat/phrases/${location}`)
	},

	async getPhraseStatistics(phrase: string) {
		return axios.get<IStatistics>(`/wordstat/phrasestat/${phrase}`)
	},

	async getPhraseByFreq() {
		return axios.get<IPhrase[]>(`/wordstat/phrasestatfreq/`)
	},
}
