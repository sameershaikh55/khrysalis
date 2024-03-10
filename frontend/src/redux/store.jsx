import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { auth } from "./features/auth";
import { video } from "./features/video";

export const store = configureStore({
  reducer: {
    [auth.reducerPath]: auth.reducer,
    [video.reducerPath]: video.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(auth.middleware, video.middleware),
});

setupListeners(store.dispatch);
