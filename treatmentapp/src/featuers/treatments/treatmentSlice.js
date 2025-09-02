import { createSlice } from "@reduxjs/toolkit";

const treatmentslice = createSlice({
  name: "treatments",
  initialState: {
    list: [],
  },
  reducers: {
    addtreatment: (state, action) => {
      const exists = state.list.find((t) => t.name === action.payload.name);
      if (!exists) {
        state.list.push(action.payload);
      }
    },
    removetreatment: (state, action) => {
      state.list = state.list.filter(t => t.id !== action.payload);
    },
    cleartreatments: (state) => {
      state.list = [];
    }
  },
});

export const { addtreatment, removetreatment, cleartreatments } = treatmentslice.actions;
export default treatmentslice.reducer;
