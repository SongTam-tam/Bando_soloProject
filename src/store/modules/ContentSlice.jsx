import { createSlice } from '@reduxjs/toolkit';
import newsData from '../../assets/api/newsData';
const initialState = {
    news: newsData,
};

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        onHover: (state, action) => {
            state.news = state.news.map((item) =>
                item.id === action.payload ? { ...item, hover: true } : { ...item, hover: false }
            );
        },
    },
});

export const contentActions = contentSlice.actions;
export default contentSlice.reducer;
