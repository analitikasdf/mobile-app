import { createSlice } from '@reduxjs/toolkit';

export const cartState = createSlice({
	name: 'cartState',
	initialState: {
		products: [],
		total: null
	},

	reducers: {
		addToCart: (state, action) => {
			state.products.push(action.payload);
		},
		increment: (state, action) => {
			state.products.find(item => {
				if (item.id === action.payload) {
					item.count = ++item.count;
				}
			});
		},
		decrement: (state, action) => {
			state.products.find(item => {
				if (item.id === action.payload) {
					item.count = --item.count;
				}
			});
		},
		deleteProduct: (state, action) => {
			state.products = state.products.filter(item => item.id !== action.payload);
		},
		getTotal: state => {
			state.total = state.products.reduce((sum, item) => {
				sum + item.count * item.price;
			});
		}
	}
});

// Action creators are generated for each case reducer function
export const { increment, decrement, addToCart, deleteProduct, getTotal } = cartState.actions;

export const selectCartData = state => state.cartState.products;
export const selectGetTotal = state => state.cartState.products;

export default cartState.reducer;
