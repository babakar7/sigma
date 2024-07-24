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
        bgPrimary:"1d1d1d"

      },
      boxShadow: {
        'custom': '0px 5px 15px rgba(0, 0, 0, 0.5)',
      },


    },
  },
	plugins: [flowbitePlugin],
} 

