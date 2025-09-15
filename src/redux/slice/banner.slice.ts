import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = {};

export const bannerSlice = createSlice({
  name: 'banner',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // handleVisibleBanner: (
    //   state,
    //   action: PayloadAction<{
    //     key: keyof typeof initialState;
    //     value: boolean;
    //   }>,
    // ) => {
    //   state[action.payload.key] = action.payload.value;
    // },
  },
});

export default bannerSlice;
