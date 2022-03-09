import React, { useEffect, useRef } from 'react';
import { Text, Button } from 'react-native-elements';
import { MaskedTextInput } from 'react-native-mask-text';
import tw from 'twrnc';

import { useDispatch, useSelector } from 'react-redux';
import { setAuthStatus, setAuthPhone, selectAuthPhone } from '../../screens/UserScreen/UserSlice';

export const InputPhone = () => {
	const dispatch = useDispatch();
	const phone = useSelector(selectAuthPhone);
	const ref_input = useRef();

	useEffect(() => {
		ref_input.current.focus();
	});

	const userCheck = async () => {
		try {
			const response = await fetch(`https://test.cafekolhida.ru/app-users?phone=${phone}`);
			const res = await response.json();
			res.length > 0 ? dispatch(setAuthStatus(2)) : dispatch(setAuthStatus(3));
			console.log(res);
		} catch (error) {
			dispatch(setAuthStatus(5));
			console.error(error);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Text style={tw.style('p-3', 'text-base')}>Ваш телефон</Text>
			<MaskedTextInput
				placeholder="+7"
				keyboardType="phone-pad"
				value={phone}
				onChangeText={(_value, rawValue) => dispatch(setAuthPhone(rawValue))}
				errorStyle={{ color: 'red' }}
				errorMessage=""
				mask="+7 (999) 999-99-99"
				maxLength={18}
				style={tw.style('w-5/6', 'text-base', 'text-center')}
				ref={ref_input}
			/>
			<Button
				onPress={() => userCheck()}
				title="ок"
				buttonStyle={tw.style('p-1', 'text-base', 'text-center')}
				containerStyle={{
					width: 200,
					marginHorizontal: 50,
					marginVertical: 10
				}}
				titleStyle={{ fontWeight: 'bold' }}
			/>
		</ThemeProvider>
	);
};
