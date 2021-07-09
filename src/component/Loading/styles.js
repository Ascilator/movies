export const styles = () => ({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: '0.3s',
    background: '#F9F9FA',
    opacity: 0,
    visibility: 'hidden',
    zIndex: 10,
    '@media screen and (max-width: 700px)': {
      position: 'fixed',
      height: '100vh',
    },
  },
  loadingVisible: {
    opacity: 1,
    visibility: 'visible',
  },
  loadingColor: '#',
});
