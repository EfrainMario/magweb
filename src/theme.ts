import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ec6b43',
    },
    secondary: {
      main: '#000',
    },
    error: {
      main: red.A400,
    },
    // background: {
    //   paper: '#0a0a0c'
    // }
  },
  components: {
    MuiButton: {

      styleOverrides: {
        disableElevation: true,
        sizeLarge: 'large',
        root: {
          textTransform: 'none',
          fontWeight: 'bold'
        }
      }
    }
  },
  typography: {
    fontFamily: [
      'Work Sans',
      'sans-serif'
    ].join(','),
  }
});


export default responsiveFontSizes(theme);
