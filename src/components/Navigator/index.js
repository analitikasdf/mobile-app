import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';

import { useSelector, useDispatch } from 'react-redux';
import { selectAppState } from '../../../appSlice';
import { setIsLoadingApp } from '../../../appSlice';
import { selectProducts, selectCategories } from '../../screens/CatalogScreen/CatalogSlice';

import { HomeScreen } from '../../screens/HomeScreen/HomeScreen';
import { CatalogScreen } from '../../screens/CatalogScreen/CatalogScreen';
import { UserScreen } from '../../screens/UserScreen/UserScreen';
import { CartScreen } from '../../screens/CartScrreen/CartScreen';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
	console.log('start navigator');

	// let visible = useSelector(selectAppState);
	// const dispatch = useDispatch();
	const products = useSelector(selectProducts);
	const categories = useSelector(selectCategories);

	// if (products.length > 0 && categories.length > 0) {
	// 	dispatch(setIsLoadingApp(false));
	// }

	// console.log(products);

	if (!products && !categories) return <AppLoading />;
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused ? 'ios-home' : 'ios-home';
							size = focused ? 30 : 20;
						} else if (route.name === 'Catalog') {
							iconName = focused ? 'ios-list' : 'ios-list';
							size = focused ? 30 : 20;
						} else if (route.name === 'Cart') {
							iconName = focused ? 'ios-cart' : 'ios-cart';
							size = focused ? 30 : 20;
						} else if (route.name === 'User') {
							iconName = focused ? 'ios-person' : 'ios-person';
							size = focused ? 30 : 20;
						} else if (route.name === 'Plus') {
							iconName = focused ? 'ios-add' : 'ios-add';
							size = focused ? 30 : 20;
						}
						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarLabelStyle: { height: 10 },
					tabBarShowLabel: false,
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray'
				})}
			>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						title: '',
						headerTitleStyle: {
							// fontSize: 42,
							// fontWeight: 'bold'
						},
						headerStyle: {
							height: 0,
							backgroundColor: '#f4511e'
						},
						headerTintColor: 'aqua'
					}}
				/>
				<Tab.Screen
					name="Catalog"
					component={CatalogScreen}
					options={{
						title: '',
						headerTitleStyle: {
							// fontSize: 42,
							// fontWeight: 'bold'
						},
						headerStyle: {
							height: 0,
							backgroundColor: '#f4511e'
						},
						headerTintColor: 'aqua'
					}}
				/>
				<Tab.Screen
					name="User"
					component={UserScreen}
					options={{
						title: '',
						headerTitleStyle: {
							// fontSize: 42,
							// fontWeight: 'bold'
						},
						headerStyle: {
							height: 0,
							backgroundColor: '#f4511e'
						},
						headerTintColor: 'aqua'
					}}
				/>
				<Tab.Screen
					name="Cart"
					component={CartScreen}
					options={{
						title: '',
						headerTitleStyle: {
							// fontSize: 42,
							// fontWeight: 'bold'
						},
						headerStyle: {
							height: 0,
							backgroundColor: '#f4511e'
						},
						headerTintColor: 'aqua'
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};
