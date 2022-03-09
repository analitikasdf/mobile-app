import React, { useState } from 'react'
import { Input, Text, Button } from 'react-native-elements'
import tw from 'twrnc'

export const ErrorPhone = () => {
	return (
		<>
			<Text>Пользователь не найден для регистрации введите ваш номер</Text>

			<MaskedTextInput
				placeholder="+7"
				keyboardType="phone-pad"
				value={phone}
				onChangeText={(_value, rawValue) => dispatch(setAuthPhone(rawValue))}
				errorStyle={{ color: 'red' }}
				errorMessage=""
				mask="+7 (999) 999-99-99"
				maxLength={18}
				style={tw.style('w-10/12', 'text-base', 'text-center')}
			/>
			<Button
				// onPress={() => fetchPhone()}
				title="ок"
				buttonStyle={tw.style('p-1', 'text-base', 'text-center')}
				containerStyle={{
					width: 200,
					marginHorizontal: 50,
					marginVertical: 10,
				}}
				titleStyle={{ fontWeight: 'bold' }}
			/>
			<Button
				// onPress={() => dispatch(setAuthStatus(4))}
				title="отмена"
				buttonStyle={tw.style('p-1', 'text-base', 'text-center')}
				containerStyle={{
					width: 200,
					marginHorizontal: 50,
					marginVertical: 10,
				}}
				titleStyle={{ fontWeight: 'bold' }}
			/>
		</>
	)
}
