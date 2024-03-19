import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

export const video = createApi({
  reducerPath: "video",
  baseQuery: fetchBaseQuery({
    baseUrl: `/video`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    allVideos: builder.query({
      query: () => "/",
    }),
    videoDetail: builder.query({
      query: (id) => `/single-video/${id}`,
    }),
    // channelVideos: builder.mutation({
    //   query: (body) => ({
    //     url: "/auth/register",
    //     method: "POST",
    //     body,
    //   }),
    // }),
  }),
});

export const { useAllVideosQuery, useVideoDetailQuery } = video;
