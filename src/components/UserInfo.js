import React, { useState } from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';
import { useDispatch } from 'react-redux';
import {
	setAuthStatus,
	setIsAuth,
	setAuthPhone,
	setToken,
	setSmsCodeRandom,
	resetSmsCode
} from '../screens/UserScreen/UserSlice';

export const UserInfo = () => {
	const dispatch = useDispatch();
	dispatch(setSmsCodeRandom(null));
	dispatch(resetSmsCode());

	const setLocalStorageToken = async data => {
		await AsyncStorage.setItem('@storage_Key', data);
	};
	const logOut = () => {
		dispatch(setAuthStatus(1));
		dispatch(setIsAuth(false));
		dispatch(setToken(''));
		dispatch(setAuthPhone(''));
		setLocalStorageToken('');
		console.log('exit');
	};

	return (
		<View style={tw.style('items-center')}>
			<Text>Информация об авторизованом пользователе</Text>
			<Button
				onPress={() => logOut('')}
				title="Выход"
				buttonStyle={tw.style('p-1', 'text-base', 'text-center')}
				containerStyle={{
					width: 200,
					marginHorizontal: 50,
					marginVertical: 10
				}}
				titleStyle={{ fontWeight: 'bold' }}
			/>
		</View>
	);
};
