module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#F04F23",
          "secondary": "#8E8E8E",
          "accent": "#FAA61A",
          "neutral": "#292929",
          "base-100": "#ffffff",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}