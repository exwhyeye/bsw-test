import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiGamesResponse } from "@/model/apiGamesResponse";

export const apiGames = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/pragmatic/game/",
  }),
  endpoints: (builder) => ({
    getGames: builder.query<ApiGamesResponse, string>({
      query: (partnerName: string) => `list?partner_name=${partnerName}`,
    }),
  }),
});

export const { useGetGamesQuery } = apiGames;
