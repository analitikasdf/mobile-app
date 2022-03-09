import React, { useState } from 'react';
import { Input, Text, Button } from 'react-native-elements';
import tw from 'twrnc';

import { useDispatch, useSelector } from 'react-redux';
import { setToken, setData, setAuthStatus } from '../../screens/UserScreen/UserSlice';

export const AuthError = () => {
	const dispatch = useDispatch();
	const toLogin = () => {
		dispatch(setAuthStatus(1));
		dispatch(setToken(null));
	};

	return (
		<>
			<Text style={tw.style('p-3', 'text-base')}>Что-то пошло не так!</Text>
			<Button
				onPress={() => toLogin()}
				title="Войти"
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
