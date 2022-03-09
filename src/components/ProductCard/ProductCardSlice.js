import { createSlice } from '@reduxjs/toolkit'

export const productCardState = createSlice({
	name: 'productCardState',
	initialState: {
		product: {},
	},
	reducers: {
		getProduct: (state, action) => {
			state.product = action.payload
		},
		// toggleModalProductList: (state) => {
		// 	state.modalProductList = !state.modalProductList
		// },
		// toggleModalProductCard: (state) => {
		// 	state.modalProductCard = !state.modalProductCard
		// },
		// getProducts: (state, action) => {
		// 	state.products = action.payload
		// },
		// getCategories: (state, action) => {
		// 	state.categories = action.payload
		// },
		// decrement: (state, action) => {
		// 	state.products.map((item) => {
		// 		if (item.id === action.payload) {
		// 			item.num = --item.num
		// 		}
		// 	})
		// },
		// incrementByAmount: (state, action) => {
		// 	state.value += action.payload
		// },
	},
})

export const { getProduct } = productCardState.actions

export const selectProductsCard = (state) => state.productCardState.product

export default productCardState.reducer
