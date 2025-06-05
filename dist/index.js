"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  TwinkleText: () => TwinkleText
});
module.exports = __toCommonJS(index_exports);

// src/TwinkleText.tsx
var import_react = require("react");

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
  content: attr(text-twinkle-data);
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
var import_jsx_runtime = require("react/jsx-runtime");
var cssInjected = false;
var TwinkleText = ({
  children,
  className = "",
  hover = false,
  groupHover = false
}) => {
  (0, import_react.useEffect)(() => {
    if (!cssInjected) {
      const style = document.createElement("style");
      style.textContent = twinkleCSS;
      document.head.appendChild(style);
      cssInjected = true;
    }
  }, []);
  const twinkleClass = groupHover ? "group-hover-text-twinkle" : hover ? "hover-text-twinkle" : "text-twinkle";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      "data-text-twinkle": typeof children === "string" ? children : void 0,
      className: `${twinkleClass} ${className}`,
      children
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TwinkleText
});
