import { all } from 'redux-saga/effects'

import { movieListsSaga } from "./movieListsSaga"
import { movieDataSaga } from "./movieDataSaga"


export function* moviesSaga() {
    yield all([
        movieListsSaga(),
        movieDataSaga()
    ])
}