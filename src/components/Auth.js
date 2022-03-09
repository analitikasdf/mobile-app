import React from 'react';

import { useSelector } from 'react-redux';
import { selectAuthStatus } from '../screens/UserScreen/UserSlice';

import { InputPhone } from './InputPhone';
import { InputPassword } from './InputPassword';
import { InputSMS } from './InputSMS';
import { InputRecovery } from './InputRecovery';
import { AuthError } from './AuthError';

export const Auth = () => {
	const authStatus = useSelector(selectAuthStatus);
	const authStatusMap = statusCode => {
		const statusCollection = {
			1: <InputPhone />,
			2: <InputPassword />,
			3: <InputSMS />,
			4: <InputRecovery />,
			5: <AuthError />
		};
		return statusCollection[statusCode] || statusCollection[6];
	};
	return authStatusMap(authStatus);
};
