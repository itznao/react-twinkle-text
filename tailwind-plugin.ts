import plugin from "tailwindcss/plugin";

const twinkleBefore: Record<string, string> = {
  content: "attr(text-twinkle-data)",
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

export default plugin(function ({ addUtilities, addComponents }: any) {
  addUtilities({
    "@keyframes text-twinkle": {
      "0%": { "background-position": "150% 0" },
      "100%": { "background-position": "-250% 0" },
    },
  });

  addComponents({
    ".text-twinkle": {
      position: "relative",
      display: "inline-block",
    },
    ".text-twinkle::before": {
      ...twinkleBefore,
      animation: "text-twinkle 5s linear infinite",
    },
    ".hover-text-twinkle": {
      position: "relative",
      display: "inline-block",
    },
    ".hover-text-twinkle::before": {
      ...twinkleBefore,
      opacity: "0",
    },
    ".hover-text-twinkle:hover::before": {
      animation: "text-twinkle 5s linear infinite",
      opacity: "1",
    },
    ".group-hover-text-twinkle": {
      position: "relative",
      display: "inline-block",
    },
    ".group-hover-text-twinkle::before": {
      ...twinkleBefore,
      opacity: "0",
    },
    ".group:hover .group-hover-text-twinkle::before": {
      animation: "text-twinkle 5s linear infinite",
      opacity: "1",
    },
  });
});
