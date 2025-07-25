import React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

const PragmaticPlayIcon: React.FC<IconProps> = ({
  color = "#FFFFFF",
  size = 24,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <title>chevron-down</title>
      <path
        d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
        fill={color}
      />
    </svg>
  );
};

export default PragmaticPlayIcon;
