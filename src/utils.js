import axios from 'axios';
import { URL_DETAILS, URL_PLOT, URL_TAGS, URL_TOP } from './constants/constants';

const TYPE_REQUEST = 'GET';
const HEADERS = {
  'x-rapidapi-key': process.env.REACT_APP_API_KEY,
  'x-rapidapi-host': 'imdb8.p.rapidapi.com',
};

export async function getMovieByTitle(title) {
  const options = {
    method: TYPE_REQUEST,
    url: URL_DETAILS,
    params: { tconst: title },
    headers: HEADERS,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPlot(id) {
  const options = {
    method: TYPE_REQUEST,
    url: URL_PLOT,
    params: { tconst: id },
    headers: HEADERS,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTags(id) {
  const options = {
    method: TYPE_REQUEST,
    url: URL_TAGS,
    params: { tconst: id },
    headers: HEADERS,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getTop() {
  const options = {
    method: TYPE_REQUEST,
    url: URL_TOP,
    headers: HEADERS,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
