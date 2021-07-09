import React from 'react';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core';

import styles from './styles';

function ErrorComponent({ messege, classes }) {
  return (
    <div className={classes.errorContainer}>
      <div className="wrapper">
        <div className={classes.error}>{messege}</div>
      </div>
    </div>
  );
}

export default compose(withStyles(styles))(ErrorComponent);
