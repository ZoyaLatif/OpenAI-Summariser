import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

//store is the global which makes api for entire state
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});