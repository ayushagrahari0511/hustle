import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import searchJob from './searchJobSlice'

//* create the persist object config that will be stored to the storage:
//* ------------------------

const persistSearchJob = {
    key: 'searchJob',
    version: 1,
    storage,
};



const search_job = persistReducer(persistSearchJob, searchJob)
export const store = configureStore(
    {
        reducer: {
            search_job,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [
                    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
                ]
            }
        })
    }
)

export let persistor = persistStore(store)