import { GET_MOVIES, GET_MOVIES_FAIL, GET_MOVIES_SUCCESS, GET_DETAIL, GET_DETAIL_SUCCESS } from './actions';

export function rootReducer(state, action) {
  switch (action.type) {
    case GET_MOVIES: {
      return {
        ...state,
        //movies: [],
        loading: true,
        searchString: action.searchString,
      };
    }
    case GET_MOVIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        movies: action.movies,
      };
    }
    case GET_DETAIL: {
      return {
        ...state,
        movies: [],
        loading: true,
      };
    }
    case GET_DETAIL_SUCCESS: {
      return {
        ...state,
        movieInfo: action.movieInfo,
        loading: false,
      };
    }
    case GET_MOVIES_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
