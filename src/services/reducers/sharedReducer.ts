import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
	loading: boolean;
}

const initialState: UserState = {
	loading: false, 
};

export const sharedSlice = createSlice({
	name: 'shared',
	initialState,
	reducers: {
		showLoading: (state) => {
			state.loading = true;
		},
		hideLoading: (state) => {
			state.loading = false;
		},
	},
});

export default sharedSlice.reducer;
