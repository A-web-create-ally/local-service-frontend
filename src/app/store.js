import { configureStore } from "@reduxjs/toolkit";

import serviceReducer from "../features/service/serviceslice";
import authReducer from "../features/auth/authslic";
import registerReducer from "../features/register/registerSlice";

export const store = configureStore({
  reducer: {
    services: serviceReducer,
    auth: authReducer,
    register: registerReducer,
  },
});