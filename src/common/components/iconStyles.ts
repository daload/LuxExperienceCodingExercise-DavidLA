import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

export const iconStyles = StyleSheet.create({
    iconContainer: {
        width: scale(20),
        height: scale(20)
    },
    iconContainerLarge: {
        width: scale(35),
        height: scale(35)
    },
    icon: {
        width: '100%',
        height: '100%'
    }
})