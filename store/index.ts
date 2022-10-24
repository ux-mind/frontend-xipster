import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import * as reducer from './slices';
import { ENVIRONMENTS } from '@/constants';

const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT
});

export type AppState = ReturnType<typeof store.getState>;

export interface AppStateContainer {
	state: AppState;
}

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
