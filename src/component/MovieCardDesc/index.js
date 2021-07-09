import React from 'react';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core';

import TagsComponent from '../TagsComponent';

import { styles } from './styles';

function MovieCardDesc({ moiveData, moviePlot, movieTaglines, classes }) {
  function toPlot(moviePlot) {
    return moviePlot.plots.map((plotText, i) => {
      return <span key={i}>{plotText.text}</span>;
    });
  }
  return (
    <div className={classes.bigMovieContainer}>
      <div className={classes.wrapper}>
        <div className={classes.imgContainer}>
          <img src={moiveData.image.url} className={classes.imgContainerImg} alt="" />
        </div>
        <div className={classes.contentBox}>
          <div className={classes.name}>
            {moiveData.title} <span> ({moiveData.year})</span>
          </div>
          <div className={classes.plot}>
            <div className={classes.descTitle}>Description</div>
            <div className={classes.text}>{toPlot(moviePlot)}</div>
          </div>
          <TagsComponent taglines={movieTaglines.taglines}></TagsComponent>
        </div>
      </div>
    </div>
  );
}

export default compose(withStyles(styles))(MovieCardDesc);
