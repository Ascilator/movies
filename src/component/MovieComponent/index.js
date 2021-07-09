import React from 'react';

import { compose } from 'redux';

import { withStyles } from '@material-ui/core';

import Loading from '../Loading';
import MoviesGrid from '../MovieGrid';

import styles from './styles';

function MovieComponent({ classes, loading, movies }) {
  return (
    <div className={classes.content_container}>
      <Loading loading={loading}></Loading>
      <MoviesGrid movies={movies}></MoviesGrid>
    </div>
  );
}

export default compose(withStyles(styles))(MovieComponent);
