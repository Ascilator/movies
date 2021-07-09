export const styles = (theme) => ({
  paper: {
    height: 140,
    width: 100,
  },
  button: {
    marginLeft: theme.spacing(2),
    padding: '10px 20px',
    '@media screen and (max-width: 500px)': {
      marginLeft: 0,
      marginTop: theme.spacing(2),
      display: 'block',
      width: '100%',
      height: 50,
    },
  },
  div: {
    maxWidth: '700px',
    flex: '0 1 700px',
    display: 'flex',
    '@media screen and (max-width: 500px)': {
      display: 'block',
    },
  },
  textField: {
    //
    height: 48,
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    '@media screen and (max-width: 500px)': {
      height: 50,
    },
  },
  textLabel: {
    transform: `translate(14px, -50%)`,
    top: '50%',
    transition: '0.2s',
    '&.Mui-focused': {
      top: 0,
    },
    '&.MuiFormLabel-filled': {
      top: 0,
    },
  },
});
