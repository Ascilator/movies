import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';

import { getTop, getMovieByTitle, getPlot, getTags } from '../../utils';
import { getMovie } from '../../redux/actions';

import MovieCardDesc from '../../component/MovieCardDesc';
import YouMayLike from '../../component/YouMayLike';
import GoBack from '../../component/GoBack';

import styles from './styles';
import Loading from '../../component/Loading';

class FullMovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: null,
      moviePlot: null,
      movieTaglines: null,
      youMayLike: [],
    };
  }
  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const { getMovie, movieInfo } = this.props;
    getMovie(movieId);
    let moviePlot, movieTaglines;
    moviePlot = await getPlot(movieId);
    movieTaglines = await getTags(movieId);

    this.setState(
      {
        movieInfo,
        moviePlot,
        movieTaglines,
      },
      async () => {
        const youMayLike = await getTop();
        youMayLike.slice(0, 10).map((e, i) => {
          setTimeout(() => {
            this.getMovieByTitl(e.id.split('/')[2]);
          }, 2000 * i);
        });
      },
    );
  }
  getMovieByTitl = async (id) => {
    const elem = await getMovieByTitle(id);
    this.setState((state) => ({
      youMayLike: [...state.youMayLike, elem],
    }));
  };

  render() {
    const { movieInfo } = this.props;
    const { moviePlot, movieTaglines, youMayLike } = this.state;

    const { classes, loading } = this.props;
    if (!movieInfo || !movieTaglines || !moviePlot) return <Loading loading={loading} />;
    return (
      <div className={classes.mavieCard}>
        <MovieCardDesc moiveData={movieInfo} moviePlot={moviePlot} movieTaglines={movieTaglines} />
        <YouMayLike youMayLike={youMayLike} />
        <GoBack />
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  // from store to props than to state
  movieInfo: store.movieInfo,
  loading: store.loading,
});

const mapDispatchToProps = {
  getMovie,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles))(FullMovieContainer);
