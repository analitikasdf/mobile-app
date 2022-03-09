import { useDispatch, useSelector } from 'react-redux';
import { selectToken, setData, setIsAuth, setAuthStatus, setAuthPhone } from '../screens/UserScreen/UserSlice';

export const useCheckToken = () => {
	const token = useSelector(selectToken);
	dispatch = useDispatch();

	const userCheckToken = async () => {
		try {
			const response = await fetch(`https://test.cafekolhida.ru/app-users?token=${token}`);
			const res = await response.json();
			dispatch(setIsAuth(true));
			dispatch(setAuthStatus(1));
			dispatch(setAuthPhone(res[0].phone));
			dispatch(setData(...res));
		} catch (error) {
			console.error(error);
		}
	};

	const resetState = () => {
		dispatch(setIsAuth(false));
		dispatch(setData({}));
	};

	token ? userCheckToken() : resetState();
};
