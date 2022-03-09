export const usePasswordGenerator = len => {
	var password = '';
	var symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < len; i++) {
		password += symbols.charAt(Math.floor(Math.random() * symbols.length));
	}
	// fetch('https://test.cafekolhida.ru/app-users', {
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
};
