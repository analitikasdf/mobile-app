import { createSlice } from '@reduxjs/toolkit';

export const homeScreenState = createSlice({
	name: 'homeScreenState',
	initialState: {
		slidesCategory: []
	},
	reducers: {
		getSliderCategory: (state, action) => {
			state.slidesCategory = action.payload;
		}
	}
});

export const { getSliderCategory } = homeScreenState.actions;

export const selectSliderCategory = state => state.homeScreenState.slidesCategory;

export default homeScreenState.reducer;
