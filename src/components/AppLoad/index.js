import React from 'react';
import { getProducts, getCategories } from '../../screens/CatalogScreen/CatalogSlice';
import { setSliderProducts } from '../../screens/HomeScreen/HomeScreenSlice';
import { useDispatch } from 'react-redux';
import { Navigator } from '../Navigator';
import { useCheckToken } from '../useCheckToken';
import { useGetLocalStorageToken } from '../useGetLocalStorageToken';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetSliderProductsQuery, useGetCategoriesQuery, useGetProductsQuery } from '../../api/ApiSlice';

import { useLoadData } from '../useLoadData';

export const AppLoad = () => {
	console.log('start app load');
	const dispatch = useDispatch();
	// const { data: sliderProducts } = useGetSliderProductsQuery();
	// const products = useGetProductsQuery();
	// const categories = useGetCategoriesQuery();
	// console.log(sliderProducts, 'sliderProducts');
	// const loadSliderCategory = () => {
	// 	dispatch(setSliderProducts(sliderProducts));
	// };
	// const loadProducts = () => {
	// 	dispatch(getProducts(products));
	// };
	// const loadCategories = () => {
	// 	dispatch(getCategories(categories));
	// };

	useLoadData();
	// loadSliderCategory();
	// useGetLocalStorageToken();
	// useCheckToken();

	return <Navigator />;
	return null;
};
