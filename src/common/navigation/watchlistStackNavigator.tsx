import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WatchlistScreen from '../../modules/watchlist/containers/watchlistScreen'
import MovieDetailScreen from '../../modules/dashboard/containers/movieDetailsScreen'
import { SCREEN_NAMES } from '../constants'
import { type WatchListStackParamList } from '../types/navigationTypes'
import HeaderWatchlistActionButton from '../../modules/watchlist/components/headerWatchlistActionButton'

const WatchlistStack = createNativeStackNavigator<WatchListStackParamList>()

export const WatchlistStackNavigator = () => {
    return (
        <WatchlistStack.Navigator>
            <WatchlistStack.Screen 
                name={SCREEN_NAMES.WATCHLIST_SCREEN}
                component={WatchlistScreen}
                options={{ title: 'Watchlist' }} 
            />
            <WatchlistStack.Screen
                name={SCREEN_NAMES.MOVIE_DETAILS_SCREEN} 
                component={MovieDetailScreen}
                options={({ route }) => ({
                    title: 'Details',
                    headerRight: () => (<HeaderWatchlistActionButton movie={route.params?.movie} />)
                })}
            />
        </WatchlistStack.Navigator>
    )
}