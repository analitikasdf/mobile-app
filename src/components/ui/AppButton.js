import React from 'react'
import {
	Button,
	ThemeProvider,
	TouchableNativeFeedback,
} from 'react-native-elements'

const theme = {
	Button: {
		raised: true,
		title: 'Привет',
		disabled: false,
	},
}

export const AppButton = () => {
	return (
		<ThemeProvider theme={theme}>
			<Button TouchableComponent={TouchableNativeFeedback} />
		</ThemeProvider>
	)
}
