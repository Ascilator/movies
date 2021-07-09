import axios from 'axios';
import { URL_FIND, URL_DETAILS } from '../constants/constants';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAIL = 'GET_MOVIES_FAIL';

export const GET_DETAIL = 'GET_DETAILS';
export const GET_DETAIL_SUCCESS = 'GET_DETAILS_SUCSESS';

const TYPE_REQUEST = 'GET';
const HEADERS = {
  'x-rapidapi-key': process.env.REACT_APP_API_KEY,
  'x-rapidapi-host': 'imdb8.p.rapidapi.com',
};

export function getMovies(searchString) {
  return async (dispatch) => {
    dispatch({
      type: GET_MOVIES,
      searchString: searchString,
    });
    const options = {
      method: TYPE_REQUEST,
      url: URL_FIND,
      params: { q: searchString },
      headers: HEADERS,
    };

    axios
      .request(options)
      .then((response) => response.data.results)
      .then((json) =>
        dispatch({
          type: GET_MOVIES_SUCCESS,
          movies: json,
        }),
      )
      .catch((error) =>
        dispatch({
          type: GET_MOVIES_FAIL,
          error,
        }),
      );
  };
}

export function getMovie(id) {
  return async (dispatch) => {
    dispatch({
      type: GET_DETAIL,
    });
    const options = {
      method: TYPE_REQUEST,
      url: URL_DETAILS,
      params: { tconst: id },
      headers: HEADERS,
    };

    axios.request(options).then((json) => {
      dispatch({
        type: GET_DETAIL_SUCCESS,
        movieInfo: json.data,
      });
    });
  };
}
