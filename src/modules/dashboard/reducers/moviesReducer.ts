import { ADD_MOVIE, SET_MOVIE_DATA_FETCH_STATUS, SET_MOVIE_LIST, SET_MOVIE_LIST_FETCH_STATUS } from '../actions/actions'
import { MovieActionType } from '../types/moviesTypes'
  
const initialState = {
    movieLists: {
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    },
    movieListsFetchStatus: {
        nowPlaying: null,
        popular: null,
        topRated: null,
        upcoming: null
    },
    allMoviesData: {},
    movieDataFetchStatus: null
}
  
export function movieReducer(state = initialState, action: MovieActionType) {
    switch (action.type) {
        case SET_MOVIE_LIST:
            return {
                ...state,
                movieLists: {
                    ...state.movieLists,
                    [action.list]: action.movieList
                }
            }
        case SET_MOVIE_LIST_FETCH_STATUS:
            return {
                ...state,
                movieListsFetchStatus: {
                    ...state.movieListsFetchStatus,
                    [action.list]: action.status
                }
            }
        case ADD_MOVIE:
            return {
                ...state,
                allMoviesData: {
                    ...state.allMoviesData,
                    [action.movie.id]: action.movie
                }
            }
        case SET_MOVIE_DATA_FETCH_STATUS:
            return{
                ...state,
                movieDataFetchStatus: action.status
            }
        default:
            return state
    }
}
