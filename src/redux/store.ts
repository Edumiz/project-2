import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { apiCaller } from './query';
import bannerSlice from './slice/banner.slice';
import toastSlice from './slice/toast.slice';
import { filterParamsSlice } from './slice/filterParams.slice';
import { sortParamsSlice } from './slice/sortParams.slice';
import { usersListSlice } from './slice/usersList.slice';

const bannerPersistConfig = {
  key: 'banner',
  storage,
};

const rootReducer = combineReducers({
  toast: toastSlice.reducer,
  banner: persistReducer(bannerPersistConfig, bannerSlice.reducer),
  apiCaller: apiCaller.reducer,
  filterParams: filterParamsSlice.reducer,
  sortParams: sortParamsSlice.reducer,
  usersList: usersListSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false, 
      serializableCheck: false,
    }).concat(apiCaller.middleware);
  },
});

// setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistor = persistStore(store);
export default store;
