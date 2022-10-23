/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
          colors:{
            "hpro": "#140C40",
            "hpro2nd" : "#0FB45F",
            "hprohf" : "#06112A",
          }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark", "night"],
    },
}