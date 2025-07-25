import { configureStore } from "@reduxjs/toolkit";
import { apiGames } from "@/api/apiGames";
import { apiPreviews } from "@/api/apiPreviews";

export const store = configureStore({
  reducer: {
    [apiGames.reducerPath]: apiGames.reducer,
    [apiPreviews.reducerPath]: apiPreviews.reducer, // Добавляем apiPreviews.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(apiGames.middleware)
      .concat(apiPreviews.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
