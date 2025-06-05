import plugin from "tailwindcss/plugin";

// This plugin does not export any twinkle classes for user consumption.
// If you want to provide only the keyframes or other utilities, add them here.

export default plugin(function ({ addUtilities }: any) {
  addUtilities({
    "@keyframes text-twinkle": {
      "0%": { "background-position": "150% 0" },
      "100%": { "background-position": "-250% 0" },
    },
  });
});
