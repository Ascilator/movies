import React from 'react';
import { Link } from 'react-router-dom';

import { compose } from 'redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import styles from './styles';

function YouMayLike({ youMayLike, classes }) {
  let cards = new Array(10);
  for (let i = 0; i < 10; i++) {
    if (!youMayLike[i]) {
      cards[i] = null;
    }
    cards[i] = youMayLike[i];
  }
  cards = cards.map((cardItem, i) => {
    if (!cardItem) {
      return (
        <Link to={`#`} className={classes.cardItem + ' ' + classes._inactive} key={i}>
          <div className={classes.cardItemImg}></div>
          <div className={classes.name}></div>
        </Link>
      );
    }
    return (
      <Link to={`/movies${cardItem.id}`} className={classes.cardItem} key={i}>
        <div className={classes.cardItemImg}>
          <img src={cardItem.image.url} alt="" />
        </div>
        <div className={classes.name}>{cardItem.title}</div>
      </Link>
    );
  });
  return (
    <div className="youMayLike">
      <div className={classes.headerPart}>
        <div className={classes.wrapper}>You may like</div>
      </div>
      <div className="mayLikeBodys">
        <div className={classes.wrapper}>{cards}</div>
      </div>
    </div>
  );
}

YouMayLike.propTypes = {
  youMayLike: PropTypes.array,
};

export default compose(withStyles(styles))(YouMayLike);
