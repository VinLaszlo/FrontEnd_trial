import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { ownerReducer } from "./reducers/owner";
import { programReducer } from "./reducers/program";

const Store = configureStore({
  reducer: {
    user: userReducer,
    owner: ownerReducer,
    programs: programReducer,
  },
});

export default Store;
