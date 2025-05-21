import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  ICategories,
  IProducts,
  IProductsParams,
} from "../types/interfaces";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    getCategories: builder.query<ICategories[], null>({
      query: () => ({
        url: "/categories",
      }),
    }),
    getProducts: builder.query<IProducts[], IProductsParams>({
      query: (params) => ({
        url: "/products",
        params,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = shopApi;
