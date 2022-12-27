import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import userReducer from './reducers/userReducer';
import sharedReducer from './reducers/sharedReducer';

import history from "../utils/history";

export const store = configureStore({
	reducer: {
		user: userReducer, 
		shared: sharedReducer, 
		router: connectRouter(history),
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
