"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwinkleText = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const twinkleStyles_1 = require("./twinkleStyles");
let cssInjected = false;
const TwinkleText = ({ children, className = "", hover = false, groupHover = false, }) => {
    (0, react_1.useEffect)(() => {
        if (!cssInjected) {
            const style = document.createElement("style");
            style.textContent = twinkleStyles_1.twinkleCSS;
            document.head.appendChild(style);
            cssInjected = true;
        }
    }, []);
    const twinkleClass = groupHover
        ? "group-hover-text-twinkle"
        : hover
            ? "hover-text-twinkle"
            : "text-twinkle";
    return ((0, jsx_runtime_1.jsx)("span", { "data-text-twinkle": typeof children === "string" ? children : undefined, className: `${twinkleClass} ${className}`, children: children }));
};
exports.TwinkleText = TwinkleText;
