import React, { useEffect } from "react";
import { twinkleCSS } from "./twinkleStyles";

let cssInjected = false;

export const twinkleText = ({
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
    <span text-twinkle-data={children} className={`${twinkleClass} ${className}`}>
      {children}
    </span>
  );
};
