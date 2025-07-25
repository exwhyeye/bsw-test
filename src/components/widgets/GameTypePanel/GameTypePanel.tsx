import React from "react";

import Card from "@/components/ui/Card/Card";
import Dropdown from "@/components/ui/Dropdown/Dropdown";

import * as styles from "./GameTypePanel.module.scss";

export interface GameTypePanelOption {
  value: string;
  label: string;
}

export interface GameTypePanelProps {
  value: string;
  onChange: (value: string) => void;
  options: GameTypePanelOption[];
}

const GameTypePanel: React.FC<GameTypePanelProps> = ({
  value,
  onChange,
  options,
  ...rest
}) => {
  return (
    <Card className={styles["game-type-panel"]} {...rest}>
      Game Type
      <div style={{ width: "140px" }}>
        <Dropdown
          options={options}
          value={value}
          onChange={onChange}
          placeholder="Select an option"
        />
      </div>
    </Card>
  );
};

export default GameTypePanel;
