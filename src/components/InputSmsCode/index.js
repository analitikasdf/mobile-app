import React, { useState, useRef, useEffect } from 'react';
import { View } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import tw from 'twrnc';
import { setIsAuth, setAuthStatus, setSmsTimerDuration, selectSmsTimerDuration } from '../../screens/UserScreen/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

export const InputSmsCode = () => {
	const [number_1, setNumber_1] = useState(null);
	const [number_2, setNumber_2] = useState(null);
	const [number_3, setNumber_3] = useState(null);
	const [number_4, setNumber_4] = useState(null);

	const input_1 = useRef(null);
	const input_2 = useRef(null);
	const input_3 = useRef(null);
	const input_4 = useRef(null);

	const dispatch = useDispatch();
	const timer = useSelector(selectSmsTimerDuration);

	const smsCheck = () => {
		// sendSms()

		if (true) {
			dispatch(setIsAuth(true));
		} else {
			dispatch(setAuthStatus(5));
		}
	};

	// const InputCode = () => <Input containerStyle={tw.style('w-1/6', 'text-center')} style={tw.style('text-center')} />

	useEffect(() => {
		if (timer > 0) {
			setTimeout(() => {
				dispatch(setSmsTimerDuration());
			}, 1000);
			// return () => clearInterval(time)
		}
	});

	return (
		<>
			<Text style={tw.style('p-3', 'text-base')}>Вход: введите код из СМС</Text>
			<View style={tw.style('p-3', 'text-base', 'flex-row')}>
				<Input
					containerStyle={tw.style('w-1/6', 'text-center')}
					style={tw.style('text-center')}
					ref={input_1}
					onChangeText={i => {
						if (number_1 === null && i !== '') {
							setNumber_1(i);
							input_2.current.focus();
						}
					}}
					errorStyle={{ color: 'red' }}
					errorMessage=""
					keyboardType={'numeric'}
					maxLength={1}
				/>
				<Input
					containerStyle={tw.style('w-1/6')}
					style={tw.style('text-center')}
					ref={input_2}
					onChangeText={i => {
						console.log(i);
						if (i !== '') {
							setNumber_2(i);
							input_3.current.focus();
						}
					}}
					onFocus={() => {
						if (number_2 !== null)
							input_2.current.setNativeProps({ text: number_2, selection: { start: 1, end: 1 } });
					}}
					errorStyle={{ color: 'red' }}
					errorMessage=""
					keyboardType={'numeric'}
					maxLength={1}
				/>
				<Input
					containerStyle={tw.style('w-1/6')}
					style={tw.style('text-center')}
					ref={input_3}
					onChangeText={i => {
						if (number_3 === null && i !== '') {
							setNumber_3(i);
							input_4.current.focus();
						}
					}}
					errorStyle={{ color: 'red' }}
					errorMessage=""
					keyboardType={'numeric'}
					maxLength={1}
				/>
				<Input
					containerStyle={tw.style('w-1/6')}
					style={tw.style('text-center')}
					ref={input_4}
					onChangeText={i => {
						if (number_4 === null && i !== '') {
							setNumber_4(i);
							//TODO: submit
						}
					}}
					errorStyle={{ color: 'red' }}
					errorMessage=""
					keyboardType={'numeric'}
					maxLength={1}
				/>
			</View>
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
					marginHorizontal: 50,
					marginVertical: 10
				}}
				titleStyle={{ fontWeight: 'bold' }}
			/>
		</>
	);
};
