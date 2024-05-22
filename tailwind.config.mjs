/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#028090",
        secondary: "#00BFB2",
        textPrimary: "#183B56",
        textSecondary: "#5A7184",
      },
    },
  },
  plugins: [],
};
