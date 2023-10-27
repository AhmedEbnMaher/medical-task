import { createTheme, Direction, ThemeOptions } from '@mui/material/styles';

const textColor = '#000';

const theme: ThemeOptions = {
  typography: {
    fontFamily: [
      'Cera Pro',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
    h1: {
      fontSize: '2.625rem',
      color: 'white',
    },
  },
  palette: {
    primary: {
      main: '#05abc0',
      contrastText: textColor,
    },
    secondary: {
      main: '#2ba6de',
    },
    info: {
      main: '#1d77b9',
    },
    text: {
      primary: textColor,
    },
  },
  components: {
    MuiTypography: {
      variants: [],
    },
  },
};

export default createTheme(theme);

export function createAppTheme(direction:Direction) {
  return createTheme({ ...theme, direction });
}
