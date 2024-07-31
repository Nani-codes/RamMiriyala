/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        red: {
          "100": "#ff2121",
          "200": "#ff1616",
          "300": "rgba(255, 22, 22, 0.4)",
          "400": "rgba(255, 22, 22, 0.2)",
          "500": "rgba(255, 33, 33, 0.4)",
        },
        wheat: {
          "100": "#f1d5ae",
          "200": "rgba(241, 213, 174, 0.4)",
          "300": "rgba(241, 213, 174, 0.1)",
          "400": "rgba(241, 213, 174, 0.8)",
        },
        goldenrod: "#e49424",
        gray: {
          "100": "rgba(0, 0, 0, 0.8)",
          "200": "rgba(0, 0, 0, 0.5)",
          "300": "rgba(0, 0, 0, 0.4)",
        },
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        "rammetto-one": "'Rammetto One'",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "61xl": "80px",
      "21xl": "40px",
      "15xl": "34px",
      "8xl": "27px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      "31xl": "50px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
