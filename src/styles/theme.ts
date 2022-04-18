export const theme = {
  border: {
    radius: {
      small: '2rem',
      medium: '3rem',
      large: '4rem',
      round: '50%'
    }
  },
  font: {
    family: {
      montserrat:
        "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700
    },
    sizes: {
      xxsmall: '1.2rem',
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '1.8rem',
      xmedium: '2.0rem',
      large: '2.4rem',
      huge: '3.2rem'
    }
  },
  boxShadow: {
    header: '0px 11px 23px rgba(52, 48, 144, 0.06)',
    thumb: '0px 5px 20px rgba(173, 172, 172, 0.2)',
    input: '0px 5px 10px rgba(173, 172, 172, 0.3)'
  },
  spacing: {
    xsmall: '0.4rem',
    small: '0.8rem',
    medium: '1.6rem',
    large: '2.4rem',
    xlarge: '3.2rem',
    xxlarge: '4.8rem',
    huge: '6.4rem'
  },
  colors: {
    primary: '#343090',
    oceanBlue: '#4e47c2',
    violetBlue: '#7a75d1',
    maximumBlue: '#b5b3e6',
    white: '#ffffff',
    black: '#2e384d',
    gray: '#706F7C',
    lightGray: '#FBFBFE',
    yellow: '#FFD600',
    success: '#00C851',
    warining: '#FF9800',
    error: '#FF5252',
    gradients: {
      footerDark: 'linear-gradient(180.49deg, #4E47C2 0.42%, #343090 69.51%)',
      footerLight:
        'linear-gradient(177.22deg, #4E47C2 14.66%, rgba(78, 71, 194, 0) 126.75%)',
      button: 'linear-gradient(90deg, #4E47C2 0%, #7EBCDF 115.38%);'
    }
  }
};

export type AppTheme = typeof theme;
