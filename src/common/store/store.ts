import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import rootSaga from './rootSaga'
import rootReducer from './rootReducer'


export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['watchlist', 'movies']
}

const persistedReducer = (persistReducer(persistConfig, rootReducer as any))

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: persistedReducer, 
  	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
        	ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
      	},
    }).concat(sagaMiddleware)
})

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)