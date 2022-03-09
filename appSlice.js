import { createSlice } from '@reduxjs/toolkit'

export const appState = createSlice({
	name: 'appState',
	initialState: {
		isLoadingApp: false,
	},

	reducers: {
		setIsLoadingApp: (state, actions) => {
			state.isLoadingApp = actions.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setIsLoadingApp } = appState.actions

export const selectAppState = (state) => state.appState.isLoadingApp

export default appState.reducer
