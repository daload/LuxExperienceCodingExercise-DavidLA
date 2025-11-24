import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

export const watchlistListItemStyles = StyleSheet.create({
    container: {
        padding: scale(10),
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: scale(1),
        borderBottomColor: '#CCCCCC'
    },
    leftSectionContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: scale(15)
    },
    posterContainer: {
		borderRadius: scale(12),
		aspectRatio: 2/3,
		width: scale(60),
		overflow: 'hidden',
        marginRight: scale(20)
	},
	poster: {
		width: '100%',
		height: '100%'
	},
    dataContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: scale(15),
        flexShrink: 1
    },
    movieTitle: {
        fontWeight: 'bold',
        fontSize: scale(15)
    }
})