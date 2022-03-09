import { createSlice } from '@reduxjs/toolkit'

export const catalogState = createSlice({
	name: 'catalogState',
	initialState: {
		modalProductList: false,
		modalProductCard: false,
		products: [],
		categories: [],
		initialCategory: '',
	},
	reducers: {
		toggleModalProductList: (state) => {
			state.modalProductList = !state.modalProductList
		},
		toggleModalProductCard: (state) => {
			state.modalProductCard = !state.modalProductCard
		},
		getProducts: (state, action) => {
			state.products = action.payload
		},
		getCategories: (state, action) => {
			state.categories = action.payload
		},
		initialCategory: (state, action) => {
			state.initialCategory = action.payload
		}
	},
})

export const { toggleModalProductList, toggleModalProductCard, modalProductCard, modalProductList, getProducts, getCategories, initialCategory } =
	catalogState.actions

export const selectModalProductList = (state) => state.catalogState.modalProductList
export const selectModalProductCard = (state) => state.catalogState.modalProductCard
export const selectCategories = (state) => state.catalogState.categories
export const selectProducts = (state) => state.catalogState.products
export const selectInitialCategory = (state) => state.catalogState.initialCategory

export default catalogState.reducer
