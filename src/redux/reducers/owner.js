import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const ownerReducer = createReducer(initialState, {
  LoadOwnerRequest: (state) => {
    state.isLoading = true;
  },
  LoadOwnerSuccess: (state, action) => {
    state.isOwner = true;
    state.isLoading = false;
    state.owner = action.payload;
  },
  LoadOwnerFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.isOwner = false;
  },

  getAllOwnersRequest: (state) => {
    state.isLoading = true;
  },
  getAllOwnersSuccess: (state, action) => {
    state.isLoading = false;
    state.owners = action.payload;
  },
  getAllOwnerFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});
