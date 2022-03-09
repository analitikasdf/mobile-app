import React from 'react'

import { useSelector } from 'react-redux'
import { selectErrorStatus } from '../screens/UserScreen/UserSlice'
import { ErrorCode } from './ErrorCode'
import { ErrorPassword } from './ErrorPassword'
import { ErrorPhone } from './ErrorPhone'
import { Error } from './Error'

export const Auth = () => {
	const authStatus = useSelector(selectErrorStatus)
	const authStatusMap = (statusCode) => {
		const statusCollection = {
			1: <ErrorPhone />,
			2: <ErrorPassword />,
			3: <ErrorCode />,
			5: <Error />,
		}
		return statusCollection[statusCode] || statusCollection[5]
	}
	return authStatusMap(authStatus)
}
