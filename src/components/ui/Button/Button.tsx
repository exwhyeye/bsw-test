import React from "react";
import * as styles from "./Button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  height?: string | number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  height,
  style,
  ...rest
}) => {
  const buttonStyle = {
    height: height,
    ...style,
  };
  return (
    <button className={styles.button} type={type} style={buttonStyle} {...rest}>
      {children}
    </button>
  );
};

export default Button;
