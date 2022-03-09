import React from 'react'
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native'
import { Input, Text, Button } from 'react-native-elements'
import tw from 'twrnc'

export const Registration = () => {
	const [number, onChangeNumber] = React.useState(null)
	// const userCheck = () => console.log(number, 'userCeck')
	return (
		<>
			<Text style={tw.style('p-5', 'text-base', 'text-center')}>Регистрация</Text>
			<Input placeholder="Код из СМС" value={number} onChangeText={onChangeNumber} errorStyle={{ color: 'red' }} errorMessage="" />
			<Button
				onPress={() => userCheck()}
				title="Далее"
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
