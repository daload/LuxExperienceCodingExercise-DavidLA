import {
    ADD_MOVIE,
    FETCH_MOVIE_DATA,
    FETCH_MOVIE_LIST,
    SET_MOVIE_DATA_FETCH_STATUS,
    SET_MOVIE_LIST,
    SET_MOVIE_LIST_FETCH_STATUS
} from '../actions/actions'
  
interface BaseMovie {
    adult: boolean
    backdrop_path: string
    id: number
    original_language: string
    oroginal_title: string
    overview: string
    populatiry: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface Movie extends BaseMovie {
    genre_ids: number[]
}

export interface MovieData extends BaseMovie {
    belongs_to_collection: boolean
    budget: number
    genres: {id: number, name: string}[]
    homepage: string
    imdb_id: number
    production_companies: {id: number, logo_path: string, name: string, origin_cpuntry: string}[]
    production_countries: {iso_3166_1: string, name: string}[]
    revenue: number
    runtime: number
    spoken_languages: {english_name: string, iso_639_1: string, name: string}[]
    status: string
    tagline: string
}

export interface FetchMovieListsActionType {
    type: typeof FETCH_MOVIE_LIST
}

export interface FetchMovieDataActionType {
    type: typeof FETCH_MOVIE_DATA
}
  
export interface SetMovieListsActionType {
    type: typeof SET_MOVIE_LIST
    list: string
    movieList: Movie[]
}

export interface AddMovieActionType {
    type: typeof ADD_MOVIE
    movie: MovieData
}

export interface SetMovieListsFetchStatusActionType {
    type: typeof SET_MOVIE_LIST_FETCH_STATUS
    list: string
    status: string
}

export interface SetMovieDataFetchStatus {
    type: typeof SET_MOVIE_DATA_FETCH_STATUS
    status: string
}

export type MovieActionType = 
  | FetchMovieListsActionType
  | FetchMovieDataActionType
  | SetMovieListsActionType
  | AddMovieActionType
  | SetMovieListsFetchStatusActionType
  | SetMovieDataFetchStatus


export interface MovieListResponse {
    data: {
        results: Movie[]
    }
    status: number
}

export interface MovieDataResponse {
    data: MovieData
    status: number
}

export type ListNameType = 'nowPlaying' | 'popular' | 'topRated' | 'upcoming'

export interface MovieListsType {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[]
}

export interface MovieListsFetchStatusType {
    nowPlaying: string,
    popular: string,
    topRated: string,
    upcoming: string
}