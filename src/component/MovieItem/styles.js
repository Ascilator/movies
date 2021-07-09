export const styles = () => ({
  posterStyles: {
    flex: '0 1 150px',
    position: 'relative',
    paddingBottom: '40%',
  },
  posterImgStyles: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    objectFit: 'cover',
    objectPosition: '50% 50%',
  },

  textPart: {
    flex: '0 1 400px',
    marginLeft: '20px',
    '@media screen and (max-width: 500px)': {
      marginLeft: '0',
      marginTop: '15px',
    },
  },
});
