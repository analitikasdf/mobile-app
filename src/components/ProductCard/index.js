import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Text, Image, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { height, width } from '../../api/Kit';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalProductList, toggleModalProductCard } from '../../screens/CatalogScreen/CatalogSlice';
import { selectProductsCard } from './ProductCardSlice';
import { addToCart, selectCartData } from '../../screens/CartScrreen/CartSlice';

const ProductStateAction = ({ product }) => {
	const CartData = useSelector(selectCartData);
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const [count, setCount] = useState(1);

	if (CartData.find(item => item.id === product.id)) {
		const goCart = () => {
			dispatch(toggleModalProductCard());
			dispatch(toggleModalProductList());
			navigation.navigate('Cart');
		};
		return (
			<Button
				title={`В корзину`}
				onPress={() => {
					goCart();
				}}
			/>
		);
	} else {
		return (
			<View style={styles.buttons}>
				<Button
					title="Добавить"
					buttonStyle={{ width: 100 }}
					onPress={() => {
						dispatch(addToCart({ ...product, count }));
					}}
				/>
				<View style={styles.wrap}>
					<Button
						onPress={() => {
							setCount(count - 1);
						}}
						disabled={count < 2 ? true : false}
						icon={<Icon name="minus" size={15} color="white" />}
						buttonStyle={{ width: 50 }}
					/>
					<Text style={styles.count}>{count}</Text>
					<Button
						onPress={() => {
							setCount(count + 1);
						}}
						icon={<Icon name="plus" size={15} color="white" />}
						buttonStyle={{ width: 50 }}
					/>
				</View>
			</View>
		);
	}
};

export const ProductCard = () => {
	const product = useSelector(selectProductsCard);

	return (
		<ScrollView>
			<View
				style={tw.style('pt-10', 'pb-30', 'flex', 'h-full', 'justify-between', 'items-center', 'bg-white', {
					height
				})}
			>
				<Image
					style={tw.style('rounded-2xl', { width: width * 0.8, height: width * 0.8 })}
					// source={{ uri: 'https://test.cafekolhida.ru/' + product.images[0].url }}
				/>
				<Text h2>{product.name}</Text>
				<Text h3>{product.shortDescription}</Text>

				<ProductStateAction product={product} />
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#C7D0CC'
	},
	wrap: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	buttons: {
		marginTop: 50,
		width,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	count: {
		marginHorizontal: 10
	}
});
