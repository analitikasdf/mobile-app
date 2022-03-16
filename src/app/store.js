import { configureStore } from '@reduxjs/toolkit';

import cartStateReducer from '../screens/CartScrreen/CartSlice';
import catalogStateReducer from '../screens/CatalogScreen/CatalogSlice';
import productCardStateReducer from '../components/ProductCard/ProductCardSlice';
import authStateReducer from '../screens/UserScreen/UserSlice';
import homeScreenStateReducer from '../screens/HomeScreen/HomeScreenSlice';
import appStateReducer from '../../appSlice';
import { apiSlice } from '../api/ApiSlice';

export default configureStore({
	reducer: {
		cartState: cartStateReducer,
		catalogState: catalogStateReducer,
		productCardState: productCardStateReducer,
		homeScreenState: homeScreenStateReducer,
		authState: authStateReducer,
		appState: appStateReducer,
		[apiSlice.reducerPath]: apiSlice.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});
