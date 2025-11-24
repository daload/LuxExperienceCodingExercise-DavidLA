import { all } from 'redux-saga/effects'
import { moviesSaga } from '../../modules/dashboard/sagas/moviesSaga'

export default function* rootSaga() {
  yield all([
    moviesSaga()
  ])
}