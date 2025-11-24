import { ListNameType, MovieData, type Movie } from '../types/moviesTypes'

export const FETCH_MOVIE_LIST = 'FETCH_MOVIE_LIST'
export const FETCH_MOVIE_DATA = 'FETCH_MOVIE_DATA'
export const SET_MOVIE_LIST = 'SET_MOVIE_LISTS'
export const SET_MOVIE_LIST_FETCH_STATUS = 'SET_MOVIE_LISTS_FETCH_STATUS'
export const ADD_MOVIE = 'ADD_MOVIE'
export const SET_MOVIE_DATA_FETCH_STATUS = 'SET_MOVIE_DATA_FETCH_STATUS'

export const fetchMovieList = (listName: ListNameType) => ({
    type: FETCH_MOVIE_LIST,
    listName
})

export const fetchMovieData = (id: number) => ({
    type: FETCH_MOVIE_DATA,
    id
})

export const setMovieList = (list: string, movieList: Movie[], ) => ({
    type: SET_MOVIE_LIST,
    list,
    movieList
})

export const setMovieListFetchStatus = (list: string, status: string) => ({
    type: SET_MOVIE_LIST_FETCH_STATUS,
    list,
    status
})

export const addMovie = (movie: MovieData) => ({
    type: ADD_MOVIE,
    movie
})

export const setMovieDataFetchStatus = (status: string) => ({
    type: SET_MOVIE_DATA_FETCH_STATUS,
    status
})