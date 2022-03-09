import React from 'react';
import { Text } from 'react-native-elements';
import tw from 'twrnc';
import { selectSmsCodeError } from '../../screens/UserScreen/UserSlice';
import { useSelector } from 'react-redux';

export const HeaderInput = () => {
	const codeError = useSelector(selectSmsCodeError);
	// const codeError = false;
	return (
		<>
			{codeError ? (
				<Text style={tw.style('p-3')}>Вы ввели неверный код из смс</Text>
			) : (
				<Text style={tw.style('p-3')}>Введите код из смс</Text>
			)}
		</>
	);
};
