import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import { 
    FETCH_MOVIE_LIST, 
    setMovieList, 
    setMovieListFetchStatus 
} from '../actions/actions'
import { getUrlFromEndpoint } from '../../../common/helpers/urlHelper'
import { LOADING_STATUS } from '../../../common/constants'
import { MovieListResponse } from '../types/moviesTypes'
import { toSnakeCase } from '../helpers/dashboardHelpers'

function* handleFetchMovies(action: { type: string, listName: string }) {
    yield put(setMovieListFetchStatus(action.listName, LOADING_STATUS.LOADING))

    try {
        const res: MovieListResponse = yield call(axios.get, getUrlFromEndpoint(`/movie/${toSnakeCase(action.listName)}`))
        if (res && res.status === 200 && res.data) {
            yield put(setMovieList(action.listName, res.data.results))
            yield put(setMovieListFetchStatus(action.listName, LOADING_STATUS.SUCCESS))
        }
        else {
            console.log(`Error fetching ${action.listName} list: ${res.status}, ${res.data}`)
            yield put(setMovieListFetchStatus(action.listName, LOADING_STATUS.ERROR))
        }
    } catch (error) {
        console.log(`Error fetching ${action.listName} list: ${error}`)
        yield put(setMovieListFetchStatus(action.listName, LOADING_STATUS.ERROR))
    }
}

export function* movieListsSaga() {
    yield takeEvery(FETCH_MOVIE_LIST, handleFetchMovies)
}