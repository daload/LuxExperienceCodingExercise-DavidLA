import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

export const dashboardCarouselStyles = StyleSheet.create({
    container: {
      	paddingVertical: scale(16),
		paddingHorizontal: scale(24)
  	},
  	title: {
		fontSize: scale(24),
		fontWeight: 'bold',
		marginBottom: scale(10)
	},
	carouselContainer: {
		display: 'flex',
		flexDirection: 'row',
		overflow: 'scroll',
		paddingVertical: scale(14),
	},
	errorText: {
		fontSize: scale(12),
		marginBottom: scale(10)
	},
})