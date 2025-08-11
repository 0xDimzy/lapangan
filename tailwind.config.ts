import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'muted-foreground': '#6b7280'
      }
    },
  },
  plugins: [],
};
export default config;
