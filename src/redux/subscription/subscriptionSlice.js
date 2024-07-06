import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSubscription: null,
  loading: false,
  error: false,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    currentSubscriptionCheckStart: (state) => {
      state.loading = true;
    },
    currentSubscriptionCheckSuccess: (state, action) => {
      (state.currentSubscription = action.payload), (state.loading = false);
      state.error = false;
    },
    currentSubscriptionCheckFailure: (state, action) => {
      (state.loading = false), (state.error = action.action);
    },
  },
});

export const {
  currentSubscriptionCheckStart,
  currentSubscriptionCheckSuccess,
  currentSubscriptionCheckFailure,
} = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
