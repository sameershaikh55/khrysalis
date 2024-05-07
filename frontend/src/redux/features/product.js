import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

export const product = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: `/product`,
    credentials: "include",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: () => "/",
      providesTags: ["product"],
    }),
    productDetail: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (body) => ({
        url: `/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (body) => ({
        url: `/${body.id}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useAllProductsQuery,
  useProductDetailQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = product;
