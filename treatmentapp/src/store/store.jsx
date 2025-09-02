import { configureStore } from "@reduxjs/toolkit";

import treatmentReducer  from "../featuers/treatments/treatmentSlice"
export const store = configureStore({
  reducer: {
    treatments: treatmentReducer,
  },
});