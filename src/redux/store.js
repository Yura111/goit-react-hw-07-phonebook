
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phonebookReducer from './../redux/phonebook/phonebook-reducer'
import logger from 'redux-logger'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from 'redux-persist'


const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }), 
  logger
]

const store = configureStore({
    reducer:{
        phonebook:phonebookReducer
    },
    middleware,
    devTools:process.env.NODE_ENV === 'development'
})


export default store;
