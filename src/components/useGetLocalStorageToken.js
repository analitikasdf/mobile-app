import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken } from '../screens/UserScreen/UserSlice';

export const useGetLocalStorageToken = async () => {
	const dispatch = useDispatch();
	try {
		console.log('узнаем токен');
		const value = await AsyncStorage.getItem('@storage_Key');
		if (value !== null) {
			console.log('токен111: ' + value);
			dispatch(setToken(value));
		}
	} catch (e) {
		return false;
	}
};
