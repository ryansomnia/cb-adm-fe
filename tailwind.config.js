// import x from './src/Component/page/Login/login'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}","./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    colors:{
      'green': '#028174',
      'leave': '#OAB68B',
      'tea': '#92DE8B',
      'yellow': '#FFE3B3',
      'white' : '#EDF6F3',
      'navy' : '#14274E',
      'blue-dark':'#00337C',
      'blue' : '#1C82AD',
      'black' : '#020205',
      'gray': '#F0F0F0',
      'green-lato': '#04757B',
      'green-text': '#749F82',
      'red': '#FD8A8A',
      'red-dark': '#FF597B'
      
    }
   
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}