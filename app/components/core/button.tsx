import React from "react";
import { twMerge } from "tailwind-merge";
type prop = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ children, size = "medium", className, onClick }: prop) {
  const sizeClassNames = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-5 py-3",
  };
  return (
    <button
      onClick={onClick}
      className={twMerge(
        " rounded-full bg-black text-white hover:bg-opacity-80",
        sizeClassNames[size],
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
