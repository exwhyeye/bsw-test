import { GameCard } from "@/model/gameCard";

export interface ApiGamesResponse {
  status: number;
  error_message: string;
  result: GameCard[];
}
