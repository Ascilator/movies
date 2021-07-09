import React from 'react';

import { compose } from 'redux';

import { withStyles } from '@material-ui/core';

import { styles } from './styles';

function TagsComponent({ taglines, classes }) {
  return (
    <div className={classes.tagContainer}>
      {taglines.map((e, i) => {
        return (
          <div key={i} className={classes.tagItem}>
            {e}
          </div>
        );
      })}
    </div>
  );
}

export default compose(withStyles(styles))(TagsComponent);
