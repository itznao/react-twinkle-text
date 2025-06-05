import React, { useEffect } from "react";
import { twinkleCSS } from "./twinkleStyles";

let cssInjected = false;

interface TwinkleTextProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  groupHover?: boolean;
}

export const TwinkleText: React.FC<TwinkleTextProps> = ({
  children,
  className = "",
  hover = false,
  groupHover = false,
}) => {
  useEffect(() => {
    if (!cssInjected) {
      const style = document.createElement("style");
      style.textContent = twinkleCSS;
      document.head.appendChild(style);
      cssInjected = true;
    }
  }, []);

  const twinkleClass = groupHover
    ? "group-hover-text-twinkle"
    : hover
    ? "hover-text-twinkle"
    : "text-twinkle";

  return (
    <span
      data-text-twinkle={typeof children === "string" ? children : undefined}
      className={`${twinkleClass} ${className}`}
    >
      {children}
    </span>
  );
};
