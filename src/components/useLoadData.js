import { useDispatch } from 'react-redux';
import { getProducts, getCategories } from '../screens/CatalogScreen/CatalogSlice';

export const useLoadData = () => {
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
};
