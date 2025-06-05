// src/TwinkleText.tsx
import { useEffect } from "react";

// src/twinkleStyles.ts
var twinkleCSS = `
@keyframes text-twinkle {
  0% { background-position: 150% 0; }
  100% { background-position: -250% 0; }
}

.text-twinkle,
.hover-text-twinkle,
.group-hover-text-twinkle {
  position: relative;
  display: inline-block;
}

.text-twinkle::before,
.hover-text-twinkle::before,
.group-hover-text-twinkle::before {
  content: attr(data-text-twinkle);
  position: absolute;
  inset: 0;
  pointer-events: none;
  color: transparent;
  background-clip: text;
  background-image: linear-gradient(
    90deg,
    transparent,
    transparent,
    white,
    transparent,
    transparent
  );
  background-size: 200% 100%;
  background-position: 150% 0;
  filter: drop-shadow(0 0 1px #ffffff)
          drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
}

.text-twinkle::before {
  animation: text-twinkle 5s linear infinite;
}

.hover-text-twinkle::before,
.group-hover-text-twinkle::before {
  opacity: 0;
}

.hover-text-twinkle:hover::before,
.group:hover .group-hover-text-twinkle::before {
  opacity: 1;
  animation: text-twinkle 5s linear infinite;
}
`;

// src/TwinkleText.tsx
import { jsx } from "react/jsx-runtime";
var cssInjected = false;
var TwinkleText = ({
  children,
  className = "",
  hover = false,
  groupHover = false
}) => {
  useEffect(() => {
    if (!cssInjected) {
      const style = document.createElement("style");
      style.textContent = twinkleCSS;
      document.head.appendChild(style);
      cssInjected = true;
    }
  }, []);
  const twinkleClass = groupHover ? "group-hover-text-twinkle" : hover ? "hover-text-twinkle" : "text-twinkle";
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-text-twinkle": typeof children === "string" ? children : void 0,
      className: `${twinkleClass} ${className}`,
      children
    }
  );
};
export {
  TwinkleText
};
