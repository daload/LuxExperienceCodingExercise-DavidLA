import { combineReducers } from 'redux'

import { movieReducer } from '../../modules/dashboard/reducers/moviesReducer'
import { watchlistReducer } from '../../modules/watchlist/reducers/watchlistReducer'

const rootReducer = combineReducers({
  movies: movieReducer,
  watchlist: watchlistReducer
})

export default rootReducer