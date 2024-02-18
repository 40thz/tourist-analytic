import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const config: ToastOptions = {
	position: 'top-right',
	autoClose: 3000,
	closeOnClick: true,
	pauseOnHover: false,
	pauseOnFocusLoss: false,
	draggable: true,

	style: {
		fontSize: '15px',
		height: '50px',
		borderRadius: '15px',
		boxShadow: 'box-shadow: 0px 7px 36px 0px rgb(34 60 80 / 20%)',
	},
}

class Notification {
	static default = (message: string) => {
		toast(message, { ...config, type: toast.TYPE.DEFAULT })
	}
	static info = (message: string) => {
		toast(message, { ...config, type: toast.TYPE.INFO })
	}
	static success = (message: string) => {
		toast(message, { ...config, type: toast.TYPE.SUCCESS })
	}
	static error = (message: string) => {
		toast(message, { ...config, type: toast.TYPE.ERROR })
	}
	static warning = (message: string) => {
		toast(message, { ...config, type: toast.TYPE.WARNING })
	}
}

export default Notification
