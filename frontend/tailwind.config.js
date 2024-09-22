/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Small devices (mobile)
        md: "768px", // Medium devices (tablet)
        lg: "1024px", // Large devices (laptop)
        xl: "1280px", // Extra large devices (desktop)
        "2xl": "1536px", // 2X Extra large devices (large desktop)
      },
      colors: {
        primary: "#f1ea35",
      },
    },
  },
  plugins: [],
};
