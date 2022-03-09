import React from 'react';
import { Text, Button } from 'react-native-elements';
import tw from 'twrnc';
import { setSmsTimerDuration, selectSmsTimerDuration } from '../../screens/UserScreen/UserSlice';

import { useDispatch, useSelector } from 'react-redux';

export const TimerSMS = () => {
	const dispatch = useDispatch();
	const timer = useSelector(selectSmsTimerDuration);

	if (timer > 0) {
		setTimeout(() => {
			dispatch(setSmsTimerDuration());
		}, 1000);
	}

	return (
		<>
			{timer > 0 ? (
				<Text style={tw.style('p-3', 'text-base', 'flex-row')}>Повторная отправка смс через {timer} сек</Text>
			) : (
				<Text style={tw.style('p-3', 'text-base', 'flex-row')}>Отправить СМС повторно</Text>
			)}
			<Button
				onPress={() => smsCheck()}
				title="Отправить еще раз"
				disabled={timer > 0 ? true : false}
				buttonStyle={tw.style('p-3', 'text-center')}
				containerStyle={{
					width: 200,
					marginHorizontal: 0,
					marginVertical: 10
				}}
				titleStyle={{ fontWeight: 'bold' }}
			/>
		</>
	);
};
