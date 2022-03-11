import React, { useState, useEffect } from 'react';
import { Modal, Pressable, View, FlatList, Dimensions, StyleSheet } from 'react-native';
import { Text, Button, Image } from 'react-native-elements';
import tw from 'twrnc';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectModalProductList,
	selectModalProductCard,
	toggleModalProductList,
	toggleModalProductCard,
	selectCategories,
	initialCategory
} from './CatalogSlice';
import { ProductCard } from '../../components/ProductCard';
import { TabsMenu } from '../../components/TabsMenu';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function ModalTabsMenu() {
	const isPressed = useSharedValue(false);
	const offset = useSharedValue({ x: 0, y: 10 });

	const animatedStyles = useAnimatedStyle(() => {
		return {
			transform: [
				// { translateX: offset.value.x },
				{
					translateY: withSpring(offset.value.y, {
						damping: 50,
						stiffness: 90
					})
				}
				// { scale: withSpring(isPressed.value ? 1.2 : 1) },
			],
			backgroundColor: isPressed.value ? '#a4f4f4' : '#f4f4f4'
		};
	});

	const gesture = Gesture.Pan()
		.onBegin(() => {
			'worklet';
			isPressed.value = true;
		})
		.onChange(e => {
			'worklet';
			offset.value = {
				x: e.changeX + offset.value.x,
				y: e.changeY + offset.value.y
			};
		})
		.onFinalize(() => {
			'worklet';
			isPressed.value = false;
			offset.value = {
				// x: e.changeX + offset.value.x,
				y: 10
			};
		});

	const hendlerButton = () => {
		offset.value = {
			// x: e.changeX + offset.value.x,
			y: height - 100
		};
	};

	return (
		<GestureDetector gesture={gesture}>
			<Animated.View style={[tw.style({ height, width }), animatedStyles]}>
				<Button
					onPress={() => {
						hendlerButton();
					}}
					title="Close modal2"
				/>

				<TabsMenu />
				<Text>111</Text>
			</Animated.View>
		</GestureDetector>
	);
}

export const CatalogScreen = () => {
	// console.log(data, 'data')

	const visibleList = useSelector(selectModalProductList);
	const visibleCard = useSelector(selectModalProductCard);
	const dataCategory = useSelector(selectCategories);
	const dispatch = useDispatch();

	const action = i => {
		dispatch(toggleModalProductList());
		dispatch(initialCategory(i));
		hendlerButton();
	};

	const renderItem = ({ item }) => (
		<View>
			<Image
				style={tw.style('m-0.5', 'p-2', 'rounded-2xl', 'justify-end', { height: width / 2.1, width: width / 2.1 })}
				onPress={() => action(item.name)}
				// source={{ uri: 'https://test.cafekolhida.ru/' + item.image.url }}
			>
				<Text style={tw.style('text-center', { fontSize: 22 })}>{item.name}</Text>
			</Image>
		</View>
	);

	return (
		<SafeAreaView>
			<View style={tw.style({ height: height / 2 })}>
				<FlatList
					numColumns={2}
					horizontal={false}
					contentContainerStyle={{}}
					columnWrapperStyle={{ justifyContent: 'space-around' }}
					data={dataCategory}
					renderItem={renderItem}
					keyExtractor={item => item.id}
				></FlatList>
			</View>

			<ModalTabsMenu />
			{/* <Modal
				animationType="slide"
				transparent={true}
				visible={visibleList}
				onRequestClose={() => {
					dispatch(toggleModalProductList());
				}}
			>
				<Pressable
					style={tw`flex h-30 justify-center items-center bg-opacity-80 bg-black`}
					onPress={() => dispatch(toggleModalProductList())}
				>
					<Button title="Назад" buttonStyle={tw`w-30`} onPress={() => dispatch(toggleModalProductList())} />
				</Pressable>
				<TabsMenu />
			</Modal>

			<Modal
				animationType="slide"
				transparent={true}
				visible={visibleCard}
				onRequestClose={() => {
					dispatch(toggleModalProductCard());
				}}
			>
				<Pressable style={tw`flex h-30 justify-center items-center`} onPress={() => dispatch(toggleModalProductCard())}>
					<Button title="Назад" buttonStyle={tw`w-30`} onPress={() => dispatch(toggleModalProductCard())} />
				</Pressable>
				<ProductCard />
			</Modal> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	modal: {
		width: '100%',
		height,
		backgroundColor: '#f4f4f4'
	}
});
