import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

export const video = createApi({
  reducerPath: "video",
  baseQuery: fetchBaseQuery({
    baseUrl: "api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    allVideos: builder.query({
      query: () => "/video",
    }),
    channelVideos: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    videoDetail: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useAllVideosQuery } = video;
