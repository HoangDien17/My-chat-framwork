module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "red-primary": "hsl(0, 100%, 74%)",
        "red-primary-translucent": "hsl(0, 100%, 74%, 0.7)",
        "green-primary": "hsl(154, 59%, 51%)",
        "blue-accent": "hsl(248, 32%, 49%)",
        "dark-blue-neutral": "hsl(249, 10%, 26%)",
        "grayish-blue-neutral": "hsl(246, 25%, 77%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
