import userReducer from '../redux/registerSlice'
// import importReducer from '../redux/importantSlice'

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import { configureStore } from '@reduxjs/toolkit'

export const rooReducer ={
    register:userReducer,
    // import:importReducer
}

export const store = configureStore({
    reducer:rooReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
})

export const persistor = persistStore(store)