/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      screens: {
        extraSmall: "359px",
        sm: "640px", // Small devices (mobile)
        md: "768px", // Medium devices (tablet)
        lg: "1024px", // Large devices (laptop)
        xl: "1280px", // Extra large devices (desktop)
        "2xl": "1536px", // 2X Extra large devices (large desktop)
      },
      colors: {
        primary: "#1cabe2",
        secondary: "#fff4b3",
        coloreScuro: "#333333",
      },
    },
  },
  plugins: [],
};
