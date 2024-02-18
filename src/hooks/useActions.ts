import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { audienceActions } from '../store/slice/audience.slice'
import { wordstatActions } from '../store/slice/wordstat.slice'
import { userActions } from '../store/slice/user.slice'

const allActions = {
	...audienceActions,
	...wordstatActions,
	...userActions,
}

export const useAction = () => {
	const dispatch = useDispatch()

	return bindActionCreators(allActions, dispatch)
}
