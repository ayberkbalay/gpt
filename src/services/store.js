import {configureStore} from '@reduxjs/toolkit';
import {articleApi} from './article';

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)

        // Add the generated reducer as a specific top-level slice
});
