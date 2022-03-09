import React, { useState, useEffect, useRef } from 'react';
import { Input, Text, Button } from 'react-native-elements';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { selectAuthPhone, selectToken } from '../../screens/UserScreen/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setData, setIsAuth, setAuthStatus } from '../../screens/UserScreen/UserSlice';

export const InputPassword = () => {
	const [password, onChangePassword] = useState(null);
	const phone = useSelector(selectAuthPhone);
	const token = useSelector(selectToken);
	const dispatch = useDispatch();
	const ref_input = useRef();

	useEffect(() => {
		ref_input.current.focus();
	});

	const setState = res => {
		dispatch(setIsAuth(true));
		dispatch(setData(...res));
		dispatch(setToken(res[0].token));
		console.log('setState');
	};

	const checkPassword = async () => {
		try {
			const response = await fetch(`https://test.cafekolhida.ru/app-users?password=${password}&phone=${phone}`);
			const res = await response.json();
			await AsyncStorage.setItem('@storage_Key', res[0].token);
			console.log(res[0].token);
			setState(res);
		} catch (error) {
			dispatch(setAuthStatus(5));
			console.error(error);
		}
	};

	const getLocalStorageToken = async () => {
		try {
			console.log('узнаем токен');
			const value = await AsyncStorage.getItem('@storage_Key');
			console.log('токен: ' + value);
			dispatch(setToken(value));
			if (value !== null) {
				console.log(123, value);
			}
		} catch (e) {
			return false;
		}
	};
	getLocalStorageToken();

	return (
		<>
			<Input placeholder="Пароль" value={password} onChangeText={onChangePassword} errorStyle={{ color: 'red' }} errorMessage="" ref={ref_input} />
			<Button
				onPress={() => checkPassword()}
				title="ок"
				buttonStyle={tw.style('p-1', 'text-base', 'text-center')}
				containerStyle={{
					width: 200,
					marginHorizontal: 50,
					marginVertical: 10
				}}
				titleStyle={{ fontWeight: 'bold' }}
			/>
			<Button
				onPress={() => dispatch(setAuthStatus(3))}
				title="забыл пароль"
				buttonStyle={tw.style('p-1', 'text-base', 'text-center')}
				containerStyle={{
					width: 200,
					marginHorizontal: 50,
					marginVertical: 10
				}}
				titleStyle={{ fontWeight: 'bold' }}
			/>
		</>
	);
};
