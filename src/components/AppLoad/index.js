import React from 'react';
import { getProducts, getCategories } from '../../screens/CatalogScreen/CatalogSlice';
import { useDispatch } from 'react-redux';
import { Navigator } from '../Navigator';
import { useCheckToken } from '../useCheckToken';
import { useGetLocalStorageToken } from '../useGetLocalStorageToken';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AppLoad = () => {
	console.log('start app load');
	const dispatch = useDispatch();

	const loadProducts = async () => {
		try {
			const response = await fetch(`https://test.cafekolhida.ru/products?_limit=10000`);
			const data = await response.json();
			dispatch(getProducts(data));
		} catch (error) {
			console.error(error);
		}
	};
	const loadCategories = async () => {
		try {
			const response = await fetch(`https://test.cafekolhida.ru/categories`);
			const data = await response.json();
			dispatch(getCategories(data));
		} catch (error) {
			console.error(error);
		}
	};

	loadProducts();
	loadCategories();
	useGetLocalStorageToken();
	useCheckToken();

	return <Navigator />;
};
