import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Text, Image, Button } from 'react-native-elements';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Delivery } from '../../components/Delivery';
import { width, height } from '../../api/Kit';

import { selectCartData, increment, decrement, deleteProduct } from './CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CartScreen = () => {
	const cartData = useSelector(selectCartData);
	const dispatch = useDispatch();

	let total = cartData.reduce((sum, item) => {
		return sum + item.price * item.count;
	}, 0);

	console.log(total);

	// const ButtonDecrement = (id, count) => {
	// 	if (true)
	// 		return (
	// 			<Button
	// 				onPress={() => dispatch(decrement(id))}
	// 				disabled={count < 2 ? true : false}
	// 				icon={<Icon name="minus" size={15} color="white" />}
	// 				buttonStyle={{ width: 30, paddingTop: 10 }}
	// 			/>
	// 		)
	// }
	// const renderItem = ({ item }) => <OrderList name={item.name} price={item.price} count={item.count} id={item.id} />;

	const renderItem = ({ item }) => (
		<View style={tw.style('', 'mb-5', 'justify-start', 'bg-white	', 'rounded-2xl', 'flex-row')}>
			<Image
				style={tw.style('rounded-2xl', { width: width * 0.3, height: width * 0.3 })}
				// source={{ uri: 'https://test.cafekolhida.ru/' + item.images[0].url }}
			/>
			<View style={tw.style('mx-3', 'py-3', 'justify-between')}>
				<View style={tw.style()}>
					<Text style={tw.style()}>{item.name}</Text>
					<Text style={tw.style()}>цена: {item.price * item.count}</Text>
				</View>
				<View style={tw.style('flex-row', 'items-center')}>
					<Button
						onPress={item.count < 2 ? () => dispatch(deleteProduct(item.id)) : () => dispatch(decrement(item.id))}
						icon={
							item.count < 2 ? (
								<Icon name="close" size={15} color="white" />
							) : (
								<Icon name="minus" size={15} color="white" />
							)
						}
						buttonStyle={{ width: 30, paddingTop: 10, backgroundColor: item.count < 2 ? 'tomato' : 'blue' }}
					/>
					<Text style={tw.style('mx-2')}>{item.count}</Text>
					<Button
						onPress={() => dispatch(increment(item.id))}
						icon={<Icon name="plus" size={15} color="white" />}
						buttonStyle={{ width: 30, paddingTop: 10, backgroundColor: 'blue' }}
					/>
				</View>
			</View>
		</View>
	);

	return (
		<SafeAreaView style={tw.style('p-3')}>
			<FlatList data={cartData} renderItem={renderItem} keyExtractor={item => item.id} ListFooterComponent={<Delivery />} />
		</SafeAreaView>
	);
};
