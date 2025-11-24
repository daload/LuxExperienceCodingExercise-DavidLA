import React from 'react'
import { NewAppScreen } from '@react-native/new-app-screen'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'

import { Provider } from 'react-redux'
import { store } from './src/common/store/store'
import AppNavigator from './src/common/navigation/appNavigator'

const App = () => {  
    return (
    	<Provider store={store}>
      		<AppNavigator /> 
    	</Provider>
  	)
}

export default App
