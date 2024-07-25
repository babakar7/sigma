/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'
const { Config } = require('tailwindcss');


export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      fontFamily: {
        railway: ["Raleway Variable", "sans-serif"],
        poppins:["Poppins", "sans-serif"]
      },
      colors: {
        bgSecondary: "#333333",
        bgPrimary:"#00000",
        accentPrimary:"#8C50F5",
        accentPrimaryHover:"#46287b"

      },
      boxShadow: {
        'custom': '0px 5px 10px rgba(128, 128, 128, 0.5)',
      },


    },
  },
	plugins: [flowbitePlugin],
} 

