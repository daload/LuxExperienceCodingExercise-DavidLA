import { CompositeNavigationProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { Movie } from '../../modules/dashboard/types/moviesTypes'
import { SCREEN_NAMES, NAVIGATOR_NAMES } from '../constants'


export type HomeStackParamList = {
    [SCREEN_NAMES.DASHBOARD_SCREEN]: undefined
    [SCREEN_NAMES.MOVIE_DETAILS_SCREEN]: { movieTitle: string, movie: Movie }
}

export type WatchListStackParamList = {
    [SCREEN_NAMES.WATCHLIST_SCREEN]: undefined
    [SCREEN_NAMES.MOVIE_DETAILS_SCREEN]: { movieTitle: string, movie: Movie }
}

export type AppTabParamList = {
    [NAVIGATOR_NAMES.HOME_NAVIGATOR]: undefined
    [NAVIGATOR_NAMES.WATCHLIST_NAVIGATOR]: undefined
}

export type AppNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<AppTabParamList>,
    NativeStackNavigationProp<HomeStackParamList>
>