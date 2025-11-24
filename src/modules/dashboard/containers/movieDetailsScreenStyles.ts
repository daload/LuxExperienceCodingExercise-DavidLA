import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

export const movieDetailsScreenStyles = StyleSheet.create({
    scrollContainer: {
        display: 'flex',
        padding: scale(10)
    },
    posterContainer: {
		borderRadius: scale(12),
		aspectRatio: 2/3,
		width: scale(200),
		overflow: 'hidden',
	},
	poster: {
		width: '100%',
		height: '100%'
	},
    posterSectionContainer: {
        maxWidth: '80%',
        padding: scale(30),
        gap: scale(15),
        alignItems: 'center',
        alignSelf: 'center'
    },
    movieTitle: {
        fontSize: scale(18),
        fontWeight: 'bold'
    },
    mainDataContainer: {
        gap: scale(10),
        alignItems: 'flex-start'
    },
    mainDataText: {
        fontSize: scale(12)
    },
    movieLinkButton: {
        alignSelf: 'center',
        padding: scale(8),
        backgroundColor: '#000000',
        borderRadius: scale(15)
    },
    movieLinkText: {
        fontSize: scale(12),
        color: '#FFFFFF'
    },
    sectionContainer: {
        paddingHorizontal: scale(30),
        paddingBottom: scale(30)
    }
})