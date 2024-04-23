import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

// Extract the action creators and reducer from the slice
export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

// Create the Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;
