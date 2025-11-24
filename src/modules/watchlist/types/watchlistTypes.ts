import { ADD_MOVIE_TO_WATCHLIST, REMOVE_MOVIE_FROM_WATCHLIST } from '../actions/actions'
import { type Movie } from '../../dashboard/types/moviesTypes'

export interface AddToWatchlistActionType {
    type: typeof ADD_MOVIE_TO_WATCHLIST
    movie: Movie
}

export interface RemoveFromWatchlistActionType {
    type: typeof REMOVE_MOVIE_FROM_WATCHLIST
    movieId: number
}

export type WatchlistActionType = 
  | AddToWatchlistActionType
  | RemoveFromWatchlistActionType