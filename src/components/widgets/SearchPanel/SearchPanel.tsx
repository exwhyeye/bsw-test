import React, { useState } from "react";

import TextField from "@/components/ui/TextField/TextField";
import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";

import * as styles from "./SearchPanel.module.scss";

export interface SearchPanelProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({
  value,
  onChange,
  onSearch,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <Card className={styles["search-panel"]}>
      Search
      <div className={styles["search-panel__actions"]}>
        <TextField
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search"
          name="main-input"
          height={40}
        ></TextField>
        <Button height={40} onClick={handleSearchClick}>
          {" "}
          SEARCH{" "}
        </Button>
      </div>
    </Card>
  );
};

export default SearchPanel;
