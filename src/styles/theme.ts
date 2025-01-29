import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#ffcc00' },
    secondary: { main: '#1976d2' },
    background: { default: '#1a1a1a' }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5',
          borderRadius: 4
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
          borderRadius: 8
        }
      }
    }
  }
});

export default theme;
