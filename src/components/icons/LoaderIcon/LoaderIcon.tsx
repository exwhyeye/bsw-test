import React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

const LoaderIcon: React.FC<IconProps> = ({
  color = "#FFFFF0",
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
      <title>loading</title>
      <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" fill={color} />
    </svg>
  );
};

export default LoaderIcon;
