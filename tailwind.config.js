/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      laptop: "870px",
      tablet: "500px",
    },
    extend: {
      colors: {
        beige: "#E9E6DD",
        mybrown: "#C4AD9D",
        olive: "#445D48",
        myorange: "#CD853F",
      },
      fontFamily: {
        poppinsRegular: ["poppins-regular"],
        poppinsBold: ["poppins-bold"],
        montserratBold: ["montserrat-bold"],
        montserratExtraBold: ["montserrat-extrabold"],
      },
    },
  },
  plugins: [],
};
