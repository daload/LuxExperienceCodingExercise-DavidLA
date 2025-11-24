import { createSelector } from 'reselect'

import { Movie } from '../../dashboard/types/moviesTypes'

export const selectWatchlist = createSelector(
    [(state) => state?.watchlist.watchlist],
    (watchlist: Movie[]) => watchlist || []
)

export const selectIsMovieInWatchlist = createSelector(
    [(state) => state?.watchlist.watchlist, (_state, movieId) => movieId],
    (watchlist: Movie[], movieId: number) => watchlist.some((movie) => movie?.id === movieId)
)