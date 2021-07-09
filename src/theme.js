import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#12051e',
      dark: '#06010a',
      light: '#300f4e',
    },
    secondary: {
      main: '#66a5ad',
      dark: '#c4dfe6',
      contrastText: '#fff',
    },
  },
});

export default theme;
