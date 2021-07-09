import React from 'react';

import { compose } from 'redux';

import { withStyles } from '@material-ui/styles';

import { styles } from './styles';

function toHumanTime(stamp) {
  let hours = Math.round(stamp / 60);
  if (hours > 0) {
    hours += ' hours ';
  } else {
    hours = '';
  }

  return `${hours}${Math.round(stamp % 60)} minutes`;
}

function MovieItem({ title, year, imgUrl, runningTime, classes }) {
  return (
    <>
      <div className={classes.posterStyles}>
        <img src={imgUrl} className={classes.posterImgStyles} alt="" />
      </div>
      <div className={classes.textPart}>
        <div className="title">{title}</div>
        <div className="running_time">run time: {toHumanTime(runningTime)}</div>
        <div className="year">{year}</div>
      </div>
    </>
  );
}

export default compose(withStyles(styles))(MovieItem);
