import { configureStore, combineReducers } from '@reduxjs/toolkit';
import recipesSlice from './recipesSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  recipes: recipesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: true,
  });

// const store = configureStore({
//   reducer: {
//     recipes: recipesSlice,
//   },
// });

export const store = makeStore();
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
