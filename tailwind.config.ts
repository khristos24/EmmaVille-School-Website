import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-emerald-100",
    "text-emerald-600",
    "bg-amber-100",
    "text-amber-600",
  ],
  theme: {
    extend: {
      colors: {
        "cream-50": "#fefce8",
        "cream-100": "#fef9c3",
      },
    },
  },
  plugins: [],
};

export default config;
