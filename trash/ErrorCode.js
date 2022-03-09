import React, { useState } from 'react'
import { Input, Text, Button } from 'react-native-elements'
import tw from 'twrnc'

export const ErrorCode = () => {
	return (
		<>
			<Text>Неверный код !</Text>
			<Input placeholder="Password" secureTextEntry={true} style={tw.style('w-10/12', 'text-base', 'text-center')} errorStyle={{ color: 'red' }} />

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
