export const styles = () => ({
  gridStyles: {
    height: '100%',
    maxWidth: 1200,
    margin: '0 auto',
    alignContent: 'flex-start',
    '@media screen and (max-width: 700px)': {
      display: 'block',
    },
  },
  itemStyles: {
    padding: '20px',
    flex: '0 1 calc(50% - 0px)',
    display: 'flex',
    alignItems: 'flex-start',
    cursor: 'pointer',
    '@media screen and (max-width: 500px)': {
      display: 'block',
      padding: '10px 0 30px',
    },
  },
});
