import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

export const appNavigatorStyles = StyleSheet.create({
    tabBar: {
    	paddingVertical: scale(10),
      	height: scale(60)
    },
  	tabLabel: {
   	 	fontSize: scale(12),
   	 	marginBottom: scale(5)
	},
	icon: {
		width: scale(1),
		aspectRatio: 1
	}
})