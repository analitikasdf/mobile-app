import { useSelector } from 'react-redux';
import { selectSmsCodeRandom } from '../screens/UserScreen/UserSlice';

export const usePostSmsCode = () => {
	const smsCodeRandom = useSelector(selectSmsCodeRandom);
	// fetch('https://mywebsite.com/endpoint/', {
	// 	method: 'POST',
	// 	headers: {
	// 		Accept: 'application/json',
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify({
	// 		firstParam: 'yourValue',
	// 		secondParam: 'yourOtherValue'
	// 	})
	// });
	console.log('send SMS', smsCodeRandom);
};
