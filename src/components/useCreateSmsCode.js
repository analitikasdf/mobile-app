import { useDispatch, useSelector } from 'react-redux';
import { setSmsCodeRandom, selectSmsCodeRandom } from '../screens/UserScreen/UserSlice';
import { usePostSmsCode } from './usePostSmsCode';

export const useCreateSmsCode = () => {
	dispatch = useDispatch();
	const randomSms = useSelector(selectSmsCodeRandom);
	if (randomSms === null) {
		const random1 = (Math.trunc(Math.random() * 10000) + '')[0];
		const random2 = (Math.trunc(Math.random() * 10000) + '')[0];
		const random3 = (Math.trunc(Math.random() * 10000) + '')[0];
		const random4 = (Math.trunc(Math.random() * 10000) + '')[0];

		const random = parseInt(random1 + '' + random2 + '' + random3 + '' + random4);
		dispatch(setSmsCodeRandom(random));
		console.log(random);
		// usePostSmsCode();
	}
};
