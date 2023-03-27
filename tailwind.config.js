/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      accent: "#FD5825",
      accent2: "#3FABAF",
      bgDark: "#222222",
      bgLight: "#F7efe5",
      textColor: "#ffffff",
    },

    extend: {
      maxWidth: {
        wrapper: "110rem",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
