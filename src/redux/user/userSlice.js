import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //sign up
    signUpStart:(state)=>{
      state.loading = true
    },
    signUpSucess:(state, action)=>{
      (state.currentUser = action.payload),
      (state.loading = false),
      (state.error = false);
    },
    signUpFailure:(state)=>{
      state.error = false
    },
    //sign in
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      (state.currentUser = action.payload),
        (state.loading = false),
        (state.error = false);
    },
    signInFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    //update user
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      (state.loading = false), (state.error = false);
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //logout
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  signUpStart,
  signUpSucess,
  signUpFailure,
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
