import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Text, Button } from 'react-native-elements';
import tw from 'twrnc';

import { useDispatch, useSelector } from 'react-redux';
import { removeSmsCodeLastNumber, setSmsCode, selectSmsCode } from '../../screens/UserScreen/UserSlice';

export const KeyboardSMS = () => {
	const dispatch = useDispatch();

	const ButtonKey = ({ numberKey }) => {
		return (
			<Button
				onPress={() => dispatch(setSmsCode(numberKey))}
				title={numberKey}
				buttonStyle={tw.style('p-5', 'm-3', 'text-center', 'rounded-full')}
				containerStyle={{}}
				titleStyle={{ fontWeight: 'bold' }}
			/>
		);
	};

	return (
		<View style={tw.style('', 'p-3')}>
			<View style={tw.style('flex-row', 'justify-center')}>
				<ButtonKey numberKey={1} />
				<ButtonKey numberKey={2} />
				<ButtonKey numberKey={3} />
			</View>
			<View style={tw.style('flex-row', 'justify-center')}>
				<ButtonKey numberKey={4} />
				<ButtonKey numberKey={5} />
				<ButtonKey numberKey={6} />
			</View>
			<View style={tw.style('flex-row', 'justify-center')}>
				<ButtonKey numberKey={7} />
				<ButtonKey numberKey={8} />
				<ButtonKey numberKey={9} />
			</View>
			<View style={tw.style('flex-row', 'justify-start')}>
				<Button
					onPress={() => dispatch(removeSmsCodeLastNumber())}
					title="<"
					buttonStyle={tw.style('p-5', 'm-3', 'text-center')}
					containerStyle={{}}
					titleStyle={{ fontWeight: 'bold' }}
				/>
				<ButtonKey numberKey={'0'} />
			</View>
		</View>
	);
};
