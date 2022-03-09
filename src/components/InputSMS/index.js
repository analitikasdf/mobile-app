import React, { useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import { Text, Button } from 'react-native-elements';
import tw from 'twrnc';

import { TimerSMS } from './TimerSms';
import { KeyboardSMS } from './KeyboardSMS';
import { SmsInput } from './SmsInput';
import { useCreateSmsCode } from '../useCreateSmsCode';
import { HeaderInput } from './HeaderInput';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const InputSMS = () => {
	return (
		<View
			style={tw.style('bg-blue-100', 'items-center', 'justify-between', { height: windowHeight - 80, width: windowWidth })}
		>
			<HeaderInput />
			<SmsInput />
			<TimerSMS />
			<KeyboardSMS />
		</View>
	);
};
