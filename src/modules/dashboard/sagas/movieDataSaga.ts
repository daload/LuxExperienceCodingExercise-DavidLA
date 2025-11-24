import { call, put, takeLatest, type ActionPattern } from 'redux-saga/effects'
import axios from 'axios'

import { 
    addMovie,
    FETCH_MOVIE_DATA, 
    setMovieDataFetchStatus,
} from '../actions/actions'
import { getUrlFromEndpoint } from '../../../common/helpers/urlHelper'
import { LOADING_STATUS } from '../../../common/constants'
import type { MovieDataResponse } from '../types/moviesTypes'

function* handleFetchMovieData(action: { type: string, id: number }) {
    yield put(setMovieDataFetchStatus(LOADING_STATUS.LOADING))

    try {
        const res: MovieDataResponse = yield call(axios.get, getUrlFromEndpoint(`/movie/${action.id}`))
        if (res && res.status === 200 && res.data) {
            yield put(addMovie(res.data))
            yield put(setMovieDataFetchStatus(LOADING_STATUS.SUCCESS))
        }
        else {
            console.log(`Error fetching movie data: ${res.status}, ${res.data}`)
            yield put(setMovieDataFetchStatus(LOADING_STATUS.ERROR))
        }
    } catch (error) {
        console.log(`Error fetching movie data: ${error}`)
        yield put(setMovieDataFetchStatus(LOADING_STATUS.ERROR))
    }
}

export function* movieDataSaga() {
    yield takeLatest(FETCH_MOVIE_DATA, handleFetchMovieData)
}