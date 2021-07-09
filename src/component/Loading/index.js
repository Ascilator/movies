import React from 'react';
import { compose } from 'redux';

import { CircularProgress, withStyles, Grid } from '@material-ui/core';

import { styles } from './styles';

function Loading({ classes, loading }) {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      className={`${classes.loadingContainer} ${loading ? classes.loadingVisible : ''}`}
    >
      <CircularProgress color="primary" />
    </Grid>
  );
}

export default compose(withStyles(styles))(Loading);
