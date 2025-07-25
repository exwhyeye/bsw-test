import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiPreviews = createApi({
  reducerPath: "apiPreviews",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bsw-dk1.pragmaticplay.net/game_pic/square/200/",
  }),
  endpoints: (builder) => ({
    getPreview: builder.query<Blob, string>({
      query: (gameID: string) => ({
        url: `${gameID}.png`,
        responseHandler: (response) => response.blob(),
      }),
    }),
  }),
});

export const { useGetPreviewQuery } = apiPreviews;
