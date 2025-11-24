import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

export const dashboardMovieCardStyles = StyleSheet.create({
	container: {
		display: 'flex',
		width: scale(100),
		height: scale(190),
		alignItems: 'center',
		overflow: 'hidden',
		marginRight: scale(15)
	},	
	title: {
		marginTop: scale(10),
		width: scale(100),
		fontSize: scale(12),
		textAlign: 'center'
	},
	posterContainer: {
		borderRadius: scale(12),
		aspectRatio: 2/3,
		width: scale(100),
		overflow: 'hidden',
	},
	poster: {
		width: '100%',
		height: '100%'
	}
})