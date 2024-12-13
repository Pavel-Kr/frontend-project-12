/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authToken: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.authToken = action.payload;
    },
  },
});

export const { setToken } = loginSlice.actions;
export default loginSlice.reducer;
