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
import jobDetail from './jobDetailSlice'
import user from './userSlice'

//* create the persist object config that will be stored to the storage:
//* ------------------------

const persistSearchJob = {
    key: 'searchJob',
    version: 1,
    storage,
};

const persistUser = {
    key: 'user',
    version: 1,
    storage,
}

const persistJobDetail = {
    key: 'jobDetail',
    version: 1,
    storage,
}


const search_job = persistReducer(persistSearchJob, searchJob)
const user_type = persistReducer(persistUser, user)
const job_detail = persistReducer(persistJobDetail, jobDetail);

export const store = configureStore(
    {
        reducer: {
            search_job,
            user_type,
            job_detail
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