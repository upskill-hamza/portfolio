/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080c10",
        surface: "#0d1117",
        card: "#0f1520",
        border: "#1a2030",
        accent: "#00e5ff",
        accent2: "#ff3d71",
        accent3: "#a855f7",
        muted: "#5a6475",
        text: "#e8edf5",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      animation: {
        float1: "float1 8s ease-in-out infinite",
        float2: "float2 10s ease-in-out infinite",
        blink: "blink 1.5s infinite",
        scanline: "scanline 2s linear infinite",
        marquee: "marquee 25s linear infinite",
        fadeUp: "fadeUp 0.8s forwards",
      },
      keyframes: {
        float1: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-40px,40px)" },
        },
        float2: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(30px,-30px)" },
        },
        blink: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0.3 },
        },
        scanline: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
