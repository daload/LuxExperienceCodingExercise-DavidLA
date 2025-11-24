import { Movie } from "../../dashboard/types/moviesTypes"

export const ADD_MOVIE_TO_WATCHLIST = 'ADD_MOVIE_TO_WATCHLIST'
export const REMOVE_MOVIE_FROM_WATCHLIST = 'REMOVE_MOVIE_FROM_WATCHLIST'

export const addMovieToWatchlist = (movie: Movie) => ({
    type: ADD_MOVIE_TO_WATCHLIST,
    movie
})

export const removeMovieFromWatchlist = (movieId: number) => ({
    type: REMOVE_MOVIE_FROM_WATCHLIST,
    movieId
})