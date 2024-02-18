import { useTypedSelector } from 'src/hooks/useTypedSelector'

export const useAuth = () => {
	const user = useTypedSelector(state => state.user)

	return {
		isAuth: user.isAuth,
		user: user,
	}
}
