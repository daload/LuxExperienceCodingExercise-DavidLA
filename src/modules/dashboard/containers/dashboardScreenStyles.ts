import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

export const dashboardStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: scale(24),
		fontWeight: 'bold',
		marginBottom: scale(10)
	},
	subtitle: {
		fontSize: scale(16),
		color: '#666',
		marginBottom: scale(20)
	},
	actionText: {
		color: '#007AFF',
		marginTop: scale(10),
		textDecorationLine: 'underline'
	},
	loadingContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})