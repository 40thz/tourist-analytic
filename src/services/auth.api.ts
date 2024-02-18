import axios from 'axios'

const API_URL = 'api/'

axios.defaults.baseURL = API_URL

interface ILogin {
	accessToken: string
}

export const UserService = {
	async login(body: { login: string; password: string }) {
		return axios.post<ILogin>('/auth/login', body)
	},
	async check() {
		const token: string | any = localStorage.getItem('token')
		return axios.post<ILogin>(
			'auth/check',
			{},
			{
				headers: {
					Authorization: token,
				},
			}
		)
	},
}
