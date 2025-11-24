import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DashboardScreen from '../../modules/dashboard/containers/dashboardScreen'
import MovieDetailScreen from '../../modules/dashboard/containers/movieDetailsScreen'
import { SCREEN_NAMES } from '../constants'
import { type HomeStackParamList } from '../types/navigationTypes'
import HeaderWatchlistActionButton from '../../modules/watchlist/components/headerWatchlistActionButton'

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

export const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name={SCREEN_NAMES.DASHBOARD_SCREEN}
                component={DashboardScreen}
                options={{ title: 'Spotlight' }} 
            />
            <HomeStack.Screen
                name={SCREEN_NAMES.MOVIE_DETAILS_SCREEN} 
                component={MovieDetailScreen}
                options={({ route }) => ({
                    title: 'Details',
                    headerRight: () => (<HeaderWatchlistActionButton movie={route.params?.movie} />)
                })}
            />
        </HomeStack.Navigator>
    )
}