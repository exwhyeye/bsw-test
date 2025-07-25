import React from "react";
import * as styles from "./TextField.module.scss";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name?: string;
  height?: string | number;
}

const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  height,
  style,
  name,
  ...rest
}) => {
  const textFieldStyle = {
    height: height,
    ...style,
  };

  return (
    <input
      className={styles["text-field"]}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={textFieldStyle}
      type={type}
      name={name}
      {...rest}
    />
  );
};

export default TextField;
