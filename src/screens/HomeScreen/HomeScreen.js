import React from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import tw from 'twrnc';

import { SafeAreaView } from 'react-native-safe-area-context';
import { SlidersHomeScreen } from '../../components/SlidersHomeScreen';

export const HomeScreen = ({}) => {
	return (
		<SafeAreaView>
			<ScrollView style={tw`flex`}>
				<SlidersHomeScreen />
			</ScrollView>
		</SafeAreaView>
	);
};
