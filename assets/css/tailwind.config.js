module.exports = {
  purge: [
   './src/**/*.html',
   './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        // light: '#053',
        DEFAULT: '#05386B',
        // dark: '#009eeb',
      },
      darkgreen: {
        // light: '#ff7ce5',
        DEFAULT: '#379683',
        // dark: '#ff16d1',
      },
      green: {
        // light: '#ff7ce5',
        DEFAULT: '#5CDB95',
        // dark: '#ff16d1',
      },
      lightgreen: {
        // light: '#ff7ce5',
        DEFAULT: '#8EE4AF',
        // dark: '#ff16d1',
      },
      gray: {
        // darkest: '#1f2d3d',
        // dark: '#3c4858',
        DEFAULT: '#EDF5E1',
        // light: '#e0e6ed',
        // lightest: '#f9fafc',
      },
      black: {
        // light: '#ff7ce5',
        DEFAULT: '#0B0C10',
        // dark: '#ff16d1',
      },
      darkblue: {
        // light: '#ff7ce5',
        DEFAULT: '#1F2838',
        // dark: '#ff16d1',
      },
      tan: {
        // light: '#ff7ce5',
        DEFAULT: '#C5C6C7',
        // dark: '#ff16d1',
      },
      cyan: {
        // light: '#ff7ce5',
        DEFAULT: '#66FCF1',
        // dark: '#ff16d1',
      },
      teal: {
        // light: '#ff7ce5',
        DEFAULT: '#45A29E',
        // dark: '#ff16d1',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
