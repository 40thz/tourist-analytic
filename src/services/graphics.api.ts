import axios from 'axios'

const API_URL = 'api/'

axios.defaults.baseURL = API_URL

export const GraphicService = {
	async getGraphic(name: string) {
		return axios.get<any>(`/graphic/${name}`)
	},
	async updateGraphic(name: string, body: any) {
		return axios.put<any>(`/graphic/${name}`, body)
	},
}
