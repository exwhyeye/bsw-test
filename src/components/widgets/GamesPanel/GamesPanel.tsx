import React from "react";
import type { GameCard as GameCardModel } from "@/model/gameCard";

import * as styles from "./GamesPanel.module.scss";
import GameCard from "@/components/widgets/GameCard/GameCard";
import PragmaticPlayIcon from "@/components/icons/PragmaticPlayIcon/PragmaticPlayIcon";

export interface GamesPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  cards: GameCardModel[];
}

const GamesPanel: React.FC<GamesPanelProps> = ({ style, cards }) => {
  const gamePanelStyle = {
    ...style,
  };

  return (
    <div className={styles["games-panel"]}>
      <div className={styles["pragmatic-play"]}>
        <PragmaticPlayIcon />
        Pragmatic play
      </div>
      <div className={styles["games-panel__cards-grid"]} style={gamePanelStyle}>
        {cards.map((card, idx) => (
          <GameCard key={idx} card={card} />
        ))}
      </div>
    </div>
  );
};

export default GamesPanel;
