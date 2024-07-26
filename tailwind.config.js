/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'
const { Config } = require('tailwindcss');


export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      colors: {
        bgSecondary: "#333333",
        bgPrimary:"#00000",
        accentPrimary:"#fff500",
        accentPrimaryHover:"#70587C"

      },
      boxShadow: {
        'custom': '0px 5px 10px rgba(128, 128, 128, 0.5)',
      },


    },
  },
	plugins: [flowbitePlugin],
} 

