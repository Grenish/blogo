/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        germania: ["Germania One", "system-ui"],
        play: ["Playfair Display", "serif"],
      },
      colors: {
        mun: "#2292A4",
        cir: "#BDBF09",
        coa: "#D96C06",

        mel: "#F4B9B2",
        tea: "#DAEDBD",
        sky: "#7DBBC3",
      },
    },
  },
  plugins: [],
};
