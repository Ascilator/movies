export const styles = () => ({
  bigMovieContainer: {
    background: '#12051e',
    padding: '0 20px 40px',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '20px 0',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media screen and (max-width: 700px) ': {
      display: 'block',
    },
  },
  contentBox: {
    flex: '0 1 800px',
  },
  imgContainer: {
    flex: '0 0.7 400px',
    paddingBottom: '47%',
    marginRight: '40px',
    position: 'relative',

    '@media screen and (max-width: 700px)': {
      paddingBottom: 0,
      margin: '0 0 20px',
    },
  },
  imgContainerImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '5px',
    '@media screen and (max-width: 700px)': {
      position: 'unset',
      maxWidth: '320px',
      margin: '0 auto',
      display: 'block',
    },
  },
  name: {
    fontSize: 'calc(25px + 0.01 * 100vw)',
    display: 'flex',
    alignItems: 'flex-end',
    color: '#fff',
    span: {
      fontSize: 'calc(17px + 0.005 * 100vw)',
      display: 'block',
      marginBottom: '5px',
      marginLeft: '5px',
    },
  },
  plot: {
    marginTop: '30px',
    fontSize: 'calc(16px + 0.003 * 100vw)',
    lineHeight: '1.2',
    fontWeight: 300,
  },
  descTitle: {
    fontWeight: 500,
    marginBottom: '10px',
    color: '#fff',
    fontSize: '24px',
    lineHeight: '30px',
  },
  text: {
    maxWidth: '530px',
    '& span': {
      marginBottom: '5px',
      display: 'block',
      fontSize: '16px',
      lineHeight: '20px',
      color: 'rgba(255, 255, 255, 0.705)',
    },
    '@media screen and (max-width: 700px)': {
      maxWidth: '100%',
    },
  },
});
