/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        DesaturatedDarkCyan: {
          100: 'hsl(180, 29%, 50%)',
        },
        VeryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
        LightGrayishCyan: 'hsl(180, 52%, 96%)',
    },},
  },
  plugins: [],
}

// theme: {
//   screens: {
//     sm: '640px',
//     md: '768px',
//     lg: '1024px',
//     xl: '1280px',
//   },
//   fontFamily: {
//     display: ['Gilroy', 'sans-serif'],
//     body: ['Graphik', 'sans-serif'],
//   },
//   borderWidth: {
//     default: '1px',
//     '0': '0',
//     '2': '2px',
//     '4': '4px',
//   },
//   extend: {
//     colors: {
//       cyan: '#9cdbff',
//     },
//     spacing: {
//       '96': '24rem',
//       '128': '32rem',
//     }
//   }
// }