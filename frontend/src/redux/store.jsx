import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { auth } from "./features/auth";
import { video } from "./features/video";
import { comment } from "./features/comments";
import { channel } from "./features/channel";
import { product } from "./features/product";

export const store = configureStore({
  reducer: {
    [auth.reducerPath]: auth.reducer,
    [video.reducerPath]: video.reducer,
    [comment.reducerPath]: comment.reducer,
    [channel.reducerPath]: channel.reducer,
    [product.reducerPath]: product.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      auth.middleware,
      video.middleware,
      comment.middleware,
      channel.middleware,
      product.middleware
    ),
});

setupListeners(store.dispatch);
