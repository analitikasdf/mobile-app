import React from 'react';
import { Text, Button } from 'react-native-elements';
import { MaskedTextInput } from 'react-native-mask-text';
import tw from 'twrnc';

import { useDispatch, useSelector } from 'react-redux';
import { setAuthPhone, selectAuthPhone } from '../../screens/UserScreen/UserSlice';

export const InputRecovery = () => {
	const dispatch = useDispatch();
	const phone = useSelector(selectAuthPhone);
	return (
		<>
			<Text style={tw.style('p-3', 'text-base')}>Ваш телефон</Text>
			<MaskedTextInput
				placeholder="Телефон"
				keyboardType="phone-pad"
				value={phone}
				onChangeText={value => dispatch(setAuthPhone(value))}
				errorStyle={{ color: 'red' }}
				errorMessage=""
				mask="+7 (999) 999-99-99"
				maxLength={18}
			/>
			<Button
				onPress={() => userCheck(phone)}
				title="ок"
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
