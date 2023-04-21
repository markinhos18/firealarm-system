export default {
  grid: {
    container: '130rem',
    containerfluid: '140rem',
    gutter: '3.2rem',
    gutterfluid: '3.2rem'
  },
  border: {
    radius: '0.4rem',
    radiuscircular: '10rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '9rem'
    }
  },
  colors: {
    primary: '#00ACED',
    secondary: '#F15F36',
    mainBg: '#e66465',
    mainMenu: 'linear-gradient(#DDDDDD, #e66465) no-repeat;',
    lightBg: '#F2F2F2',
    white: '#f3f3f3',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#424242',
    green: '#69de91',
    darkGray: '#2E2F42',
    red: '#FF6347'
  },
  spacings: {
    xxxsmall: '0.3rem',
    xxsmall: '0.8rem',
    xsmall: '0.3rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
