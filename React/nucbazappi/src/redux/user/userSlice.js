import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUser: null,
    hiddenMenu: true,
};

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload,
            };
        },
        toggleHiddenMenu: (state) => {
            return {
                ...state,
                hiddenMenu: !state.hiddenMenu,
            };
        },
    },
});

export const { setCurrentUser, toggleHiddenMenu } = userSlice.actions;

export default userSlice.reducer;