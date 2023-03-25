import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
	loading: number;
}

const initialState: UserState = {
	loading: 0, 
};

export const sharedSlice = createSlice({
	name: 'shared',
	initialState,
	reducers: {
		showLoading: (state) => {
			state.loading ++;
		},
		hideLoading: (state) => {
			if (state.loading) {
				state.loading --;
			}
		},
	},
});

export default sharedSlice.reducer;
