import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";

const shimmerBefore: Record<string, string> = {
  content: "attr(text-shimmer-data)",
  position: "absolute",
  inset: "0",
  "pointer-events": "none",
  color: "transparent",
  "background-clip": "text",
  "background-image":
    "linear-gradient(90deg, #0000, #0000, #0000, #fff, #0000, #0000, #0000)",
  "background-size": "200% 100%",
  "background-position": "150% 0",
  filter:
    "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 2px rgba(255,255,255,0.5))",
};

export default plugin(function ({ addUtilities, addComponents }: PluginAPI) {
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
    ".text-shimmer::before": {
      ...shimmerBefore,
      animation: "text-shimmer 5s linear infinite",
    },
    ".hover-text-shimmer": {
      position: "relative",
      display: "inline-block",
    },
    ".hover-text-shimmer::before": {
      ...shimmerBefore,
      opacity: "0",
    },
    ".hover-text-shimmer:hover::before": {
      animation: "text-shimmer 5s linear infinite",
      opacity: "1",
    },
    ".group-hover-text-shimmer": {
      position: "relative",
      display: "inline-block",
    },
    ".group-hover-text-shimmer::before": {
      ...shimmerBefore,
      opacity: "0",
    },
    ".group:hover .group-hover-text-shimmer::before": {
      animation: "text-shimmer 5s linear infinite",
      opacity: "1",
    },
  });
});
