import axios from 'axios'

const API_URL = 'api/'

axios.defaults.baseURL = API_URL

export interface ICountry {
	id: number
	name: string
}

export const AudienceService = {
	async getCountries() {
		return axios.get<ICountry[]>('/audience/cities')
	},
	async getCities(id: number) {
		return axios.get<ICountry[]>(`/audience/countries/${id}`)
	},
	async getInterest() {
		return axios.get<ICountry[]>(`/audience/interest`)
	},
	async getCounter(body: any) {
		return axios.post<any>(`/audience/counter`, body)
	},
}
