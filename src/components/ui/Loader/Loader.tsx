import React from "react";

import * as styles from "./Loader.module.scss";
import LoaderIcon from "@/components/icons/LoaderIcon/LoaderIcon";

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ style, size = 24 }) => {
  const loaderStyle = {
    ...style,
  };

  return (
    <div className={styles.loader} style={loaderStyle}>
      <span className={styles["loader__icon"]}>
        <LoaderIcon size={size} />
      </span>
    </div>
  );
};

export default Loader;
