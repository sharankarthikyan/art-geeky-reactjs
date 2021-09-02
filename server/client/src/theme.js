import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#4379E5',
    },
    secondary: {
      main: '#19857b',
    },
    light: {
      main: 'rgba(0, 0, 0, 0.6)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      fade: '#F8F9FB',
    },
    line: {
      main: 'rgba(33, 33, 33, 0.08)',
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        color: 'white',
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: '96rem',
      },
    },
    MuiPaper: {
      root: {
        transition: 'background 225ms ease-in',
      },
    },
  },
  typography: {
    htmlFontSize: 10,
  },
});

export default theme;
