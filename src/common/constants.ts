import { API_KEY } from '../../env/env'

export const BASE_URL = 'https://api.themoviedb.org/3'
export const API_KEY_SUFFIX = `?api_key=${API_KEY}`
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500'

export const LOADING_STATUS = Object.freeze({
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error'
})

export const SCREEN_NAMES = Object.freeze({
    DASHBOARD_SCREEN: 'DashboardScreen',
    MOVIE_DETAILS_SCREEN: 'MovieDetailsScreen',
    WATCHLIST_SCREEN: 'WatchlistScreen'
})

export const NAVIGATOR_NAMES = Object.freeze({
    HOME_NAVIGATOR: 'HomeNavigator',
    WATCHLIST_NAVIGATOR: 'WatchlistNavigator'
})

export const ICON_MAP = Object.freeze({
    SPOTLIGHT: require('./icons/spotlightIcon.png'),
    WATCHLIST: require('./icons/watchlistIcon.png'),
    WATCHLIST_ADD: require('./icons/watchlistAddIcon.png'),
    WATCHLIST_REMOVE: require('./icons/watchlistRemoveIcon.png')
})