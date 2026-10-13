import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegistering: false,
  registerSuccess: false,
  registerError: null,
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerRequest: (state) => {
      state.isRegistering = true;
      state.registerSuccess = false;
      state.registerError = null;
    },

    registerSuccess: (state, action) => {
      state.isRegistering = false;
      state.registerError = null;
      state.registerSuccess = true;
      state.user = action.payload;
      console.log('under slice', action.payload);
    },

    registerFailure: (state, action) => {
      state.isRegistering = false;
      state.registerSuccess = false;
      state.registerError = action.payload;
    },

    clearRegisterStatus: (state) => {
      state.registerSuccess = false;
      state.registerError = null;
    }
  }
});

export const { registerRequest, registerSuccess, registerFailure, clearRegisterStatus } =
  authSlice.actions;

export default authSlice.reducer;
