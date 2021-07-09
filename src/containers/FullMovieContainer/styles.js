const styles = () => ({
  grid_styles: {
    height: '100%',
    maxWidth: 1200,
    margin: '0 auto',
    flexWrap: 'nowrap',
    padding: '30px 20px',
    '@media screen and (max-width: 700px)': {
      display: 'block',
      padding: '20px 20px',
    },
  },
  mavieCard: {
    paddingBottom: '100px',
  },
  left_container: {
    flex: '0 1 40%',
    marginRight: 40,
    '@media screen and (max-width: 700px)': {
      margin: '0 0 30px',
    },
  },
  img_container: {
    width: '100%',
    position: 'relative',
    paddingBottom: '107%',
    '@media screen and (max-width: 700px)': {
      paddingBottom: '50%',
    },
  },
  img_styles: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    objectFit: 'cover',
    objectPosition: '50% 50%',
  },

  text_container: {
    flex: '0 1 60%',
  },

  item_styles: {
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
  text_part: {
    flex: '0 1 400px',
    marginLeft: '20px',
    '@media screen and (max-width: 500px)': {
      marginLeft: '0',
      marginTop: '15px',
    },
  },
});
export default styles;
