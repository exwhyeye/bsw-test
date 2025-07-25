import React, { useEffect, useState } from "react";
import type { GameCard as GameCardModel } from "@/model/gameCard";
import { useGetPreviewQuery } from "@/api/apiPreviews";

import * as styles from "./GameCard.module.scss";
import Loader from "@/components/ui/Loader/Loader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export interface GameCardProps extends React.HTMLAttributes<HTMLDivElement> {
  card: GameCardModel;
}

const GameCard: React.FC<GameCardProps> = ({ style, card }) => {
  const [containerRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
    rootMargin: "100px",
    threshold: 0.1,
  });

  const { data: imageBlob, isLoading } = useGetPreviewQuery(card.gameID, {
    skip: !isVisible,
  });
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (imageBlob) {
      const url = URL.createObjectURL(imageBlob);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [imageBlob]);

  const gameCardStyle = {
    ...style,
  };

  return (
    <div
      ref={containerRef}
      className={styles["game-card"]}
      style={gameCardStyle}
    >
      {isLoading ? (
        <div className={styles["game-card__loader-container"]}>
          <Loader size={32} />
        </div>
      ) : (
        <div className={styles["game-card__image"]}>
          {imageUrl && <img src={imageUrl} alt={card.gameName} />}
        </div>
      )}
      <span className={styles["game-card__name"]}>{card.gameName}</span>
    </div>
  );
};

export default GameCard;
