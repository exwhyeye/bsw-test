import React, { useState, useMemo } from "react";
import { GameCard } from "@/model/gameCard";

import GamesPanel from "@/components/widgets/GamesPanel/GamesPanel";
import GameTypePanel from "@/components/widgets/GameTypePanel/GameTypePanel";
import SearchPanel from "@/components/widgets/SearchPanel/SearchPanel";

import Loader from "@/components/ui/Loader/Loader";

import { useGetGamesQuery } from "@/api/apiGames";

import * as styles from "./MainPage.module.scss";

const MainPage: React.FC = () => {
  const partnerName = "belparyaj";
  const [gameType, setGameType] = useState("0");
  const [searchInput, setSearchInput] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { data: games, isLoading } = useGetGamesQuery(partnerName);

  const gamesArray = useMemo(() => games?.result ?? [], [games]);

  const gameTypeOptions = useMemo(() => {
    if (!gamesArray.length) {
      return [{ value: "0", label: "All" }];
    }
    const uniqueTypes = Array.from(
      new Set(gamesArray.map((g: GameCard) => g.gameTypeID)),
    );
    return [
      { value: "0", label: "All" },
      ...uniqueTypes.map((type) => ({
        value: type,
        label: type.toUpperCase(),
      })),
    ];
  }, [gamesArray]);

  const filteredGames = useMemo(() => {
    return gamesArray.filter((game: GameCard) => {
      const matchesType = gameType === "0" || game.gameTypeID === gameType;
      const matchesSearch =
        searchValue.trim() === "" ||
        game.gameName.toLowerCase().includes(searchValue.trim().toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [gamesArray, gameType, searchValue]);

  const handleGameTypeChange = (value: string) => {
    setGameType(value);
  };

  const handleSearchInputChange = (value: string) => {
    setSearchInput(value);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    console.log("Поиск:", value);
  };

  return (
    <div className={styles["main-page"]}>
      {isLoading ? (
        <div className={styles["main-page__loader-container"]}>
          <Loader size={64} />
        </div>
      ) : (
        <>
          <div className={styles["main-page__header"]}>
            <GameTypePanel
              value={gameType}
              onChange={handleGameTypeChange}
              options={gameTypeOptions}
            />
            <SearchPanel
              value={searchInput}
              onChange={handleSearchInputChange}
              onSearch={handleSearch}
            />
          </div>

          <GamesPanel cards={filteredGames} />
        </>
      )}
    </div>
  );
};

export default MainPage;
