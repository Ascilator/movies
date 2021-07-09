import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

//material ui
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

//my components
import MovieComponent from '../../component/MovieComponent';
import SearchComponent from '../../component/SearchComponent';
import ErrorComponent from '../../component/ErrorComponent';

import { getMovies } from '../../redux/actions';

import { styles } from './styles';

function Home({ classes, searchString, getMovies, loading, movies, error }) {
  const handleSearch = (searchString) => {
    getMovies(searchString);
  };
  console.log(movies.length);
  return (
    <Grid className={classes.wrapper}>
      <SearchComponent onSearch={handleSearch} searchString={searchString} />
      {error ? (
        <ErrorComponent messege={error.toString()} />
      ) : movies.length === 0 ? (
        <ErrorComponent messege={'No results'} />
      ) : movies[0] === '1' ? null : (
        <MovieComponent loading={loading} movies={movies} />
      )}
    </Grid>
  );
}

const mapStateToProps = (store) => ({
  searchString: store.searchString,
  loading: store.loading,
  movies: store.movies
    ? store.movies.filter((movie, i) => {
        return movie.titleType === 'movie' || movie[i] === '1';
      })
    : [],
  error: store.error,
});

const mapDispatchToProps = {
  getMovies,
};
export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(Home);
