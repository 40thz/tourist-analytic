import React from 'react'
import jwt_decode from 'jwt-decode'

import Input from '@components/Input/Input'
import Logo from '@components/Logo/Logo'

import { Link, useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'

import Notification from '@notification/index'

import { useQuery } from 'react-query'
import { UserService } from '@service/auth.api'
import { useAction } from '@hooks/useActions'
import { IUser } from '@service/types'

type FormData = {
	login: string
	password: string
}

const LoginPage = () => {
	const navigate = useNavigate()
	const { signIn } = useAction()

	let body = {
		login: '',
		password: '',
	}

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			login: '',
			password: '',
		},
	})

	const { refetch } = useQuery(['login', body], () => UserService.login(body), {
		retry: false,
		enabled: false,
		onError(err: any) {
			Notification.error(err.response.data.message)
		},
		onSuccess(data) {
			localStorage.setItem('token', data.data.accessToken)

			const decodeData: IUser = jwt_decode(data.data.accessToken)

			Notification.info(`Добро пожаловать ${decodeData.name}!`)

			signIn({
				login: decodeData.login,
				name: decodeData.name,
				lastName: decodeData.lastName,
				isAuth: true,
			})
			navigate('/')
		},
	})

	const onSubmit = handleSubmit(data => {
		body = data

		refetch()
	})

	return (
		<div className='auth'>
			<div className='auth__container'>
				<Link to='/'>
					<Logo />
				</Link>
				<form onSubmit={onSubmit} className='auth__panel'>
					<div className='inputs'>
						<Controller
							name='login'
							control={control}
							render={({ field }) => (
								<Input type='text' label='Логин' {...field} />
							)}
							rules={{
								required: true,
							}}
						/>
						<Controller
							name='password'
							control={control}
							render={({ field }) => (
								<Input type='password' label='Пароль' {...field} />
							)}
							rules={{
								required: true,
							}}
						/>
					</div>
					<div className='errors'>
						{errors.login && <div>- Заполните поле логина</div>}
						{errors.password && <div>- Заполните поле пароля</div>}
					</div>
					<Input type='submit' value='Войти' />
				</form>
			</div>
		</div>
	)
}

export default LoginPage
