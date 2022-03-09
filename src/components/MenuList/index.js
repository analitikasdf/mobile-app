import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, Pressable, Modal } from 'react-native';
import { Image } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import { width } from '../../api/Kit';
import { toggleModalProductCard, selectProducts } from '../../screens/CatalogScreen/CatalogSlice';
import { getProduct } from '../ProductCard/ProductCardSlice';
import { MenuCard } from '../ProductCard';

const Item = ({ title, price, shortDescription, images }) => (
	<View style={styles.item}>
		<Image
			style={tw.style('m-0.5', 'rounded-2xl', { height: width / 2.1, width: width / 2.1 })}
			// source={{ uri: 'https://test.cafekolhida.ru/' + images[0].url }}
		/>
		<Text style={styles.title}>{title}</Text>
		<Text>{shortDescription}</Text>
		<Text style={styles.price}>Цена: {price}</Text>
	</View>
);

export const MenuList = ({ route }) => {
	const productsCategory = useSelector(selectProducts);
	const productsCategoryRender = productsCategory.filter(i => {
		return i.category.name === route.params.nameCategory;
	});
	const dispatch = useDispatch();

	const modalData = item => {
		dispatch(toggleModalProductCard());
		dispatch(getProduct(item));
	};
	const renderItem = ({ item }) => (
		<Pressable onPress={() => modalData(item)}>
			<Item title={item.name} price={item.price} shortDescription={item.shortDescription} images={item.images} />
		</Pressable>
	);

	return <FlatList data={productsCategoryRender} renderItem={renderItem} keyExtractor={item => item.id} />;
};
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	item: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	itemPre: {
		backgroundColor: 'aqua',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16
	},
	title: {
		// height: 100,
		fontSize: 16
	},
	price: {
		fontSize: 12
	},
	centeredView: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalView: {
		height: '100%',
		width: '100%',
		justifyContent: 'flex-start',
		backgroundColor: 'white',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 10,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	closeArea: {
		height: 200,
		width: '100%'
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	buttonOpen: {
		backgroundColor: '#F194FF'
	},
	buttonClose: {
		backgroundColor: '#2196F3',
		marginBottom: 10
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center'
	}
});
