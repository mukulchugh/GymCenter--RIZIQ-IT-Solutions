module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#F04F23",
          "secondary": "#8E8E8E",
          "accent": "#FFFFFF",
          "neutral": "#000000",
          "base-100": "#ffffff",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}