import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            return {
                ...state,
                count: state.count + 1
            }
        },
        increment_5: (state) => {
            return {
                ...state,
                count: state.count + 5
            }
        },
        decrement: (state) => {
            return {
                ...state,
                count: state.count - 1
            }
        },
        decrement_5: (state) => {
            return {
                ...state,
                count: state.count - 5
            }
        },
        divide: (state) => {
            return {
                ...state,
                count: state.count / 2
            }
        },
        multiply: (state, action) => {
            console.log(action.payload);
            return {
                ...state,
                count: state.count * 2
            }
        },
        reset: () => {
            return initialState
        }
    }
})

export const {
    decrement,
    decrement_5,
    divide,
    increment,
    increment_5,
    multiply,
    reset
} = counterSlice.actions;

export default counterSlice.reducer;