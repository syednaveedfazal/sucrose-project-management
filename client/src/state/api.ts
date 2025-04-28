import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  reducerPath: "api",
  // tag types are used for invalidating cache and refetching data based on dependency changes
  tagTypes: [],
  endpoints: (build) => ({}),
});

export const {} = api;
