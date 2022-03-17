import React from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import tw from 'twrnc';

import { SafeAreaView } from 'react-native-safe-area-context';
import { SliderCategory } from '../../components/SliderCategory';
import { SliderProducts } from '../../components/SliderProducts';

export const HomeScreen = ({}) => {
	return (
		<SafeAreaView>
			<ScrollView style={tw`flex`}>
				<SliderCategory />
				<SliderProducts />
			</ScrollView>
		</SafeAreaView>
	);
};
