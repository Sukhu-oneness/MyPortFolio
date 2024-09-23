import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        customBlue: '#1E3A8A', // Your custom blue
        customGray: '#4B5563',
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
