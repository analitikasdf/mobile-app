import { createSlice } from '@reduxjs/toolkit';

export const authState = createSlice({
	name: 'authState',
	initialState: {
		token: '',
		isAuth: false,
		authStatus: 1,
		authPhone: '',
		data: {},
		smsCode: [],
		smsCodeRandom: null,
		smsCodeError: false,
		smsTimer: {
			// timeout: null,
			// value: 0,
			duration: 10
		},
		errorStatus: null
	},
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setIsAuth: (state, action) => {
			state.isAuth = action.payload;
		},
		setAuthStatus: (state, action) => {
			state.authStatus = action.payload;
		},
		setAuthPhone: (state, action) => {
			state.authPhone = action.payload;
		},
		setData: (state, action) => {
			state.data = action.payload;
		},
		setSmsCode: (state, action) => {
			state.smsCode = [...state.smsCode, action.payload];
			state.smsCode.splice(4, 1);
		},
		resetSmsCode: state => {
			state.smsCode = [];
		},
		setSmsCodeRandom: (state, action) => {
			state.smsCodeRandom = action.payload;
		},
		setSmsCodeError: (state, action) => {
			state.smsCodeError = action.payload;
		},
		removeSmsCodeLastNumber: state => {
			state.smsCode.splice(-1, 1);
		},
		setSmsTimerDuration: state => {
			state.smsTimer.duration = state.smsTimer.duration - 1;
		},
		setErrorStatus: (state, action) => {
			state.errorStatus = action.payload;
		}
	}
});

export const {
	setToken,
	setIsAuth,
	setAuthStatus,
	setAuthPhone,
	setData,
	setSmsCode,
	resetSmsCode,
	setSmsCodeRandom,
	setSmsCodeError,
	removeSmsCodeLastNumber,
	setSmsTimerDuration,
	setErrorStatus
} = authState.actions;

export const selectToken = state => state.authState.token;
export const selectIsAuth = state => state.authState.isAuth;
export const selectAuthStatus = state => state.authState.authStatus;
export const selectAuthPhone = state => state.authState.authPhone;
export const selectData = state => state.authState.data;
export const selectSmsCode = state => state.authState.smsCode;
export const selectSmsCodeRandom = state => state.authState.smsCodeRandom;
export const selectSmsCodeError = state => state.authState.smsCodeError;
export const selectSmsTimerDuration = state => state.authState.smsTimer.duration;
export const selectErrorStatus = state => state.authState.errorStatus;

export default authState.reducer;
