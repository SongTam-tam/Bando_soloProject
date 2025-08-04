import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nav: false,
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        onNav: (state, action) => {
            state.nav = true;
        },
        closeNav: (state, action) => {
            state.nav = false;
        },
    },
});

export const headerActions = headerSlice.actions;
export default headerSlice.reducer;
