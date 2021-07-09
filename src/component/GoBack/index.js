import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';

import { Button, withStyles } from '@material-ui/core';

import { PATH_HOME } from '../../constants/constants';
import styles from './styles';

function Goback({ classes }) {
  return (
    <div className={classes.backBtn}>
      <div className="wrapper">
        <Link to={PATH_HOME} className={classes.link}>
          <Button className={classes.btn} variant="contained" color="primary">
            Go to main page
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default compose(withStyles(styles))(Goback);
