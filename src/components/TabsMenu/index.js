import * as React from 'react';
import { Text, Pressable } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MenuList } from '../MenuList';
import { useGetCategoriesQuery } from '../../api/ApiSlice';
import { selectInitialCategory, selectCategories } from '../../screens/CatalogScreen/CatalogSlice';
import { useSelector } from 'react-redux';

const Tab = createMaterialTopTabNavigator();

export const TabsMenu = () => {
	const data = useSelector(selectCategories);
	const initialName = useSelector(selectInitialCategory);
	const list = data.map(i => {
		return <Tab.Screen name={i.name} key={i.id} initialParams={{ nameCategory: i.name }} component={MenuList} />;
	});

	return (
		<Tab.Navigator
			initialRouteName={initialName}
			screenOptions={{
				tabBarLabelStyle: { fontSize: 16 },
				tabBarItemStyle: { width: 150 },
				tabBarStyle: { backgroundColor: 'powderblue' },
				tabBarScrollEnabled: true,
				tabBarPressColor: 'transparent',
				tabBarBounces: false
			}}
		>
			{list}
		</Tab.Navigator>
	);
};
