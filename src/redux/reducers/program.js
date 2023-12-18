import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const programReducer = createReducer(initialState, {
  programCreateRequest: (state) => {
    state.isLoading = true;
  },
  programCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.program = action.payload;
    state.success = true;
  },
  programCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  getAllAdminProgramsRequest: (state) => {
    state.isLoading = true;
  },
  getAllAdminProgramsSuccess: (state, action) => {
    state.isLoading = false;
    state.programs = action.payload;
  },
  getAllAdminProgramsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  deleteProgramRequest: (state) => {
    state.isLoading = true;
  },
  deleteProgramSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteProgramFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  getAllProgramsRequest: (state) => {
    state.isLoading = true;
  },
  getAllProgramsSuccess: (state, action) => {
    state.isLoading = false;
    state.allPrograms = action.payload;
  },
  getAllProgramsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
