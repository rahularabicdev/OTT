import { configureStore } from "@reduxjs/toolkit";

import alertReducer from "./slices/alertSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
  },
});

export default store;
