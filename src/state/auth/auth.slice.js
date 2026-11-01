import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegistering: false,
  registerSuccess: false,
  registerError: null,
  isAuthenticated: false,
  loginError: null,
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {},
    loginSuccess: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },

    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.loginError = action.payload;
    },

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

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  registerRequest,
  registerSuccess,
  registerFailure,
  clearRegisterStatus
} = authSlice.actions;

export default authSlice.reducer;
