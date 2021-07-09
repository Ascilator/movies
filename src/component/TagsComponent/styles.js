export const styles = () => ({
  tagContainer: {
    fontSize: '16px',
    lineHeight: '24px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '30px',
  },
  tagItem: {
    paddingBottom: '4px',
    marginRight: '10px',
    marginBottom: '6px',
    borderBottom: '1px solid hsla(0, 0%, 100%, 0.25)',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      'border-bottom': '1px solid #ffffff',
    },
  },
});
