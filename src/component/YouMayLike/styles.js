const styles = () => ({
  headerPart: {
    padding: '40px 20px',
    marginBottom: '60px',
    fontSize: '30px',
    lineHeight: 1.3,
    color: '#000',
    fontWeight: 600,
    borderBottom: '1px solid #d8d8d8',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    maxWidth: '1230px',
    margin: '0 auto ',
  },
  cardItem: {
    flex: '0 1 calc(25% - 30px)',
    margin: '0 15px 60px',
    cursor: 'pointer',
    borderRadius: '5px',

    '&:hover>div:nth-child(1)': {
      transform: 'translate(0, -20px)',
      boxShadow: '0px 18px 40px 5px rgba(34, 60, 80, 0.5)',
    },
    '@media screen and (max-width: 900px)': {
      flex: '0 1 calc(50% - 30px)',
    },

    '@media screen and (max-width: 500px)': {
      flex: '0 1 calc(100% - 30px)',
    },
  },
  _inactive: {
    background: '#d9bae0',
    '&:after': {
      display: 'none',
    },

    '& .name': {
      background: '#d9bae0',
    },
  },
  name: {
    fontSize: '18px',
    lineHeight: '24px',
    marginTop: '10px',
    paddingLeft: '3px',
    fontWeight: 500,
  },
  cardItemImg: {
    position: 'relative',
    paddingBottom: '50%',
    transition: '0.3s',
    borderRadius: '5px',

    '& img': {
      position: 'absolute',
      borderRadius: '5px',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 50%',
      '@media screen and (max-width: 500px)': {
        objectPosition: '0 20%',
      },
    },
    '&:after': {
      content: "'1$/day'",
      position: 'absolute',
      fontSize: '16px',
      padding: '5px 15px',
      bottom: '10px',
      left: '10px',
      borderRadius: '100px',
      display: 'block',
      background: 'linear-gradient(-90deg, #ffcd13, #ffe82b)',
    },
    '@media screen and (max-width: 500px)': {
      paddingBottom: '70%',
    },
  },
});
export default styles;
