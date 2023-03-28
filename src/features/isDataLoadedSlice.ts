import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

// created to prevent a new fetching data request to API when the data has already been loaded

interface IsDataLoadedState {
  isDataLoaded: boolean;
}

const initialState: IsDataLoadedState = {
  isDataLoaded: false,
};

export const isDataLoadedSlice = createSlice({
  name: 'isDataLoaded',
  initialState,
  reducers: {
    setIsDataLoaded: (state, action: PayloadAction<boolean>) => {
      state.isDataLoaded = true;
    },
  },
});

export default isDataLoadedSlice.reducer;
export const { setIsDataLoaded } = isDataLoadedSlice.actions;
