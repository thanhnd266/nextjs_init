import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserStore from './reducer/UserStore';

const reducer = combineReducers({
  UserStore: UserStore,
})

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export default store;