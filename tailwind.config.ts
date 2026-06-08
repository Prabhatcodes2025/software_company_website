import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#061022",
        ocean: "#08345f",
        cyanfire: "#38d5ff",
        mint: "#43f3b6",
        amberline: "#f7b267"
      },
      boxShadow: {
        glow: "0 0 60px rgba(56, 213, 255, 0.26)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
