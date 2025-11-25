import React from 'react'
import { Text, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeStackNavigator } from './homeStackNavigator'
import { WatchlistStackNavigator } from './watchlistStackNavigator'
import { ICON_MAP, NAVIGATOR_NAMES, SCREEN_NAMES } from '../constants'
import { type AppTabParamList } from '../types/navigationTypes'

import { appNavigatorStyles } from './appNavigatorStyles'
import Icon from '../components/icon'

const Tab = createBottomTabNavigator<AppTabParamList>()

const AppNavigator = () => {
    const tabScreenOptions = {
        headerShown: false,
        tabBarStyle: appNavigatorStyles.tabBar,
        tabBarLabelStyle: appNavigatorStyles.tabLabel,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#CCCCCC'
    }
  
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={tabScreenOptions}>
                <Tab.Screen 
                    name={NAVIGATOR_NAMES.HOME_NAVIGATOR}
                    component={HomeStackNavigator} 
                    options={{
                        title: 'Spotlight',
                        tabBarIcon: ({ color, size }) => (<Icon icon={ICON_MAP.SPOTLIGHT} size='normal' color={color} />)
                    }}
                />
                <Tab.Screen 
                    name={NAVIGATOR_NAMES.WATCHLIST_NAVIGATOR}
                    component={WatchlistStackNavigator} 
                    options={{
                        title: 'Watchlist',
                        tabBarIcon: ({ color, size }) => (<Icon icon={ICON_MAP.WATCHLIST} size='normal' color={color} />)
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator