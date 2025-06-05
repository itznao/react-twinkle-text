"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const shimmerBefore = {
    content: "attr(text-shimmer-data)",
    position: "absolute",
    inset: "0",
    "pointer-events": "none",
    color: "transparent",
    "background-clip": "text",
    "background-image": "linear-gradient(90deg, #0000, #0000, #0000, #fff, #0000, #0000, #0000)",
    "background-size": "200% 100%",
    "background-position": "150% 0",
    filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 2px rgba(255,255,255,0.5))",
};
exports.default = (0, plugin_1.default)(function ({ addUtilities, addComponents }) {
    addUtilities({
        "@keyframes text-shimmer": {
            "0%": { "background-position": "150% 0" },
            "100%": { "background-position": "-250% 0" },
        },
    });
    addComponents({
        ".text-shimmer": {
            position: "relative",
            display: "inline-block",
        },
        ".text-shimmer::before": Object.assign(Object.assign({}, shimmerBefore), { animation: "text-shimmer 5s linear infinite" }),
        ".hover-text-shimmer": {
            position: "relative",
            display: "inline-block",
        },
        ".hover-text-shimmer::before": Object.assign(Object.assign({}, shimmerBefore), { opacity: "0" }),
        ".hover-text-shimmer:hover::before": {
            animation: "text-shimmer 5s linear infinite",
            opacity: "1",
        },
        ".group-hover-text-shimmer": {
            position: "relative",
            display: "inline-block",
        },
        ".group-hover-text-shimmer::before": Object.assign(Object.assign({}, shimmerBefore), { opacity: "0" }),
        ".group:hover .group-hover-text-shimmer::before": {
            animation: "text-shimmer 5s linear infinite",
            opacity: "1",
        },
    });
});
