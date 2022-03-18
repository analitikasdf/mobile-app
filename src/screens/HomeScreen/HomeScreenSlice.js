import { createSlice } from '@reduxjs/toolkit';

export const homeScreenState = createSlice({
	name: 'homeScreenState',
	initialState: {
		slidesProducts: []
	},
	reducers: {
		setSliderProducts: (state, action) => {
			state.slidesProducts = action.payload;
		}
	}
});

export const { setSliderProducts } = homeScreenState.actions;

export const selectSliderProducts = state => state.homeScreenState.slidesProducts;

export default homeScreenState.reducer;
