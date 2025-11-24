import { ADD_MOVIE_TO_WATCHLIST, REMOVE_MOVIE_FROM_WATCHLIST } from '../actions/actions'
import { WatchlistActionType } from '../types/watchlistTypes'
import { type Movie } from '../../dashboard/types/moviesTypes'
  
const initialState = {
    watchlist: [] as Movie[]
}
  
export function watchlistReducer(state = initialState, action: WatchlistActionType) {
    switch (action.type) {
        case ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [...state.watchlist, action.movie]
            }
        case REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.movieId)
            }
        default:
            return state
    }
}
