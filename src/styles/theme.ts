export const theme = {
  border: {
    radius: {
      other: '0.8rem',
      default: '0.4rem',
      round: '50%'
    }
  },
  font: {
    family: {
      roboto:
        "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    weight: {
      light: 400,
      normal: 500,
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
  spacing: {
    xxsmall: '0.4rem',
    xsmall: '0.6rem',
    small: '0.8rem',
    medium: '1.0rem',
    large: '1.2rem',
    huge: '1.6rem'
  },
  colors: {
    primary: '#343090',
    oceanBlue: '#4e47c2',
    violetBlue: '#7a75d1',
    maximumBlue: '#b5b3e6',
    white: '#ffffff',
    black: '#2e384d'
  }
};

export type AppTheme = typeof theme;
