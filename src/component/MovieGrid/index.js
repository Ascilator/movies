import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { compose } from 'redux';

import { Grid, withStyles } from '@material-ui/core';

import MovieItem from '../MovieItem';

import { styles } from './styles';

class MoviesGrid extends Component {
  render() {
    const { movies, classes } = this.props;

    const templateMovies = movies.map((movie) => {
      return (
        <Link to={`/movies${movie.id}`} key={movie.id} className={classes.itemStyles}>
          <MovieItem
            title={movie.title}
            year={movie.year}
            imgUrl={movie.image.url}
            runningTime={movie.runningTimeInMinutes}
          ></MovieItem>
        </Link>
      );
    });
    return (
      <div className="movies_list">
        <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.gridStyles}>
          {templateMovies}
        </Grid>
      </div>
    );
  }
}

export default compose(withStyles(styles))(MoviesGrid);
