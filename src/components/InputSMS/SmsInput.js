import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCreateSmsCode } from '../useCreateSmsCode';

import {
	selectSmsCode,
	selectSmsCodeRandom,
	setSmsCodeError,
	selectAuthPhone,
	resetSmsCode,
	setIsAuth,
	setData,
	setToken
} from '../../screens/UserScreen/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

export const SmsInput = () => {
	useCreateSmsCode();

	dispatch = useDispatch();
	const smsCode = useSelector(selectSmsCode);
	const smsCodeRandom = useSelector(selectSmsCodeRandom);
	const smsCodeToString = smsCode.join('');
	const smsCodeRandomToString = smsCodeRandom + '';
	const phone = useSelector(selectAuthPhone);

	const setState = res => {
		dispatch(setIsAuth(true));
		dispatch(setData(...res));
		dispatch(setToken(res[0].token));
		console.log('setState');
	};
	const checkSmsCode = smsCode.length === 4 ? (smsCodeRandomToString === smsCodeToString ? 'approved' : 'rejected') : 'pending';

	const auth = async (phone, password) => {
		const response = await fetch(`https://test.cafekolhida.ru/app-users?password=${password}&phone=${phone}`);
		const res = await response.json();
		await AsyncStorage.setItem('@storage_Key', res[0].token);
		setState(res);
		console.log(res);
		// try {
		// 	const response = await fetch(`https://test.cafekolhida.ru/app-users?password=${password}&phone=${phone}`);
		// 	const res = await response.json();
		// 	await AsyncStorage.setItem('@storage_Key', res[0].token);
		// 	setState(res);
		// } catch (error) {
		// 	dispatch(setAuthStatus(5));
		// }
	};

	switch (checkSmsCode) {
		case 'pending':
			dispatch(setSmsCodeError(false));
			break;

		case 'rejected':
			dispatch(setSmsCodeError(true));
			setTimeout(() => {
				dispatch(resetSmsCode());
			}, 3000);
			break;

		case 'approved':
			//TODO: сгенерировали пароль, отправили по СМС и записали в страпи.
			const password = '123456';
			auth(phone, password);
			break;

		default:
			dispatch(resetSmsCode());
			break;
	}
	// if (smsCode.length !== 4) {
	// 	dispatch(setSmsCodeError(false));
	// } else if (smsCode.length === 4) {
	// } else {
	// }
	// const hendlerCheckSmsCode = (n, m) => {
	// 	if (n !== m) {
	// 		dispatch(setSmsCodeError(true));
	// 		console.log('error');
	// 	} else {
	// 		console.log('hendlerCheckSmsCode');
	// 	}
	// };

	// if (smsCode.length === 4) {
	// 	hendlerCheckSmsCode(smsCodeRandomToString, smsCodeToString);
	// }
	const arr = [];

	for (let index = 0; index < 4; index++) {
		if (smsCode[index] >= 0) {
			arr[index] = true;
		} else {
			arr[index] = false;
		}
	}

	const list = arr.map(number => {
		return (
			<View
				key={Math.random()}
				style={tw.style('w-5', 'h-5', 'mx-1', 'bg-gray-500', { 'bg-green-500': number }, 'rounded-full')}
			></View>
		);
	});
	return <View style={tw.style('flex-row')}>{list}</View>;
};
