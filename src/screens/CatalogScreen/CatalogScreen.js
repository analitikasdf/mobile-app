import React, { useState, useEffect } from 'react';
import { Modal, Pressable, View, FlatList, Dimensions } from 'react-native';
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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BASE_URI = 'https://source.unsplash.com/random?sig=';

export const CatalogScreen = () => {
	// console.log(data, 'data')

	const visibleList = useSelector(selectModalProductList);
	const visibleCard = useSelector(selectModalProductCard);
	const dataCategory = useSelector(selectCategories);
	const dispatch = useDispatch();

	const action = i => {
		dispatch(toggleModalProductList());
		dispatch(initialCategory(i));
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
			<FlatList
				numColumns={2}
				horizontal={false}
				contentContainerStyle={{}}
				columnWrapperStyle={{ justifyContent: 'space-around' }}
				data={dataCategory}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			></FlatList>
			<Modal
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
			</Modal>
		</SafeAreaView>
	);
};
