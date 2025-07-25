import React from "react";
import * as styles from "./Card.module.scss";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, style, className }) => {
  const cardStyle = {
    ...style,
  };

  const combinedClassName = [styles.card, className].filter(Boolean).join(" ");

  return (
    <div className={combinedClassName} style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;
