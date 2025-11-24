import { createSelector } from 'reselect'

import type { ListNameType, MovieListsType, MovieListsFetchStatusType, MovieData } from '../types/moviesTypes'
import { LOADING_STATUS } from '../../../common/constants'

export const selectMovieList = createSelector(
    [(state) => state?.movies.movieLists, (_state, listName: ListNameType) => listName],
    (movieLists: MovieListsType, listName: ListNameType) => movieLists?.[listName] || []
)

export const selectMovieListFetchStatus = createSelector(
    [(state) => state?.movies.movieListsFetchStatus, (_state, listName: ListNameType) => listName],
    (movieListsFetchStatus: MovieListsFetchStatusType, listName: ListNameType) => movieListsFetchStatus?.[listName]
)

export const selectMovieById = createSelector(
    [(state) => state?.movies.allMoviesData, (_state, id: number) => id],
    (allMoviesData: Record<number, MovieData>, id: number) => allMoviesData?.[id]
)

export const selectMovieDataFetchStatus = createSelector(
    [(state) => state?.movies.movieDataFetchStatus],
    (movieDataFetchStatus: string) => movieDataFetchStatus
)