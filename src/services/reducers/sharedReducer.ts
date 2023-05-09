import { createSlice } from '@reduxjs/toolkit';

export interface RootState {
	loading: number;
}

const initialState: RootState = {
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
			if (state.loading <= 0) {
				state.loading = 0;
			} else {
				state.loading --;
			}
		},
	},
});

export const {
  showLoading,
  hideLoading,
} = sharedSlice.actions;

export const getLoadingStatus = (state: RootState) => state.shared.loading;

export default sharedSlice.reducer;
