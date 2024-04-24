import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state: number) => state + 1,
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     // action.payload contiene el valor que queremos incrementar
        //     return state + action.payload;
        //   },
        decrement: (state: number) => state - 1,
    },
});

// Extract the action creators and reducer from the slice
export const { increment, decrement } = counterSlice.actions;

// Create the Redux store
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;
