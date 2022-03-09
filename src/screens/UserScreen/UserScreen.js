import React from 'react';
import { View, ScrollView } from 'react-native';
import tw from 'twrnc';

import { Auth } from '../../components/Auth';
import { UserInfo } from '../../components/UserInfo';
import { useGetLocalStorageToken } from '../../components/useGetLocalStorageToken';
import { selectToken, selectIsAuth } from '../UserScreen/UserSlice';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

export const UserScreen = () => {
	const isAuth = useSelector(selectIsAuth);
	const token = useSelector(selectToken);

	return (
		<SafeAreaView>
			<ScrollView style={tw.style('')}>
				<View style={tw.style('pt-4', 'items-center')}>{token && isAuth ? <UserInfo /> : <Auth />}</View>
			</ScrollView>
		</SafeAreaView>
	);
};
