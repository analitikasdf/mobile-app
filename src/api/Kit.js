import { Dimensions } from 'react-native';
// import {store} from '../app/store'

// export const loadData = async data => {
// 	try {
// 		const response = await fetch(`https://test.cafekolhida.ru/${data}`);
// 		const res = await response.json();
// 		return res;
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

// store.dispatch(getCategories(data));

// const loadProducts = () => {
// 	const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();
// 	dispatch(getProducts(data));
// };
// const loadCategories = () => {
// 	const { data, isLoading, isSuccess, isError, error } = useGetCategoriesQuery();
// 	dispatch(getCategories(data));
// };

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
