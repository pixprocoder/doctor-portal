module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  // daisyui: {
  //   themes: [
  //     {
  //       DoctorPortalTheme: {
  //         primary: "#0FCFEC",

  //         secondary: "#19D3AE",

  //         accent: "#3A4256",
  //       },
  //     },
  //   ],
  // },
  plugins: [require("daisyui")],
};
