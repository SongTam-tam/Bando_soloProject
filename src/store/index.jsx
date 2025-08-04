import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './modules/headerSlice';
import contentReducer from './modules/ContentSlice';

const store = configureStore({
    reducer: {
        header: headerReducer,
        news: contentReducer,
    },
});

export default store;
